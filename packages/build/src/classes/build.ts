import chalk from "chalk";
import { UlldAppConfigManager } from "./appConfig";
import { NoteType } from "./noteType";
import { TargetPaths } from "./paths";
import { TargetPackageJson } from "./pkgJson";
import { UlldPlugin } from "./plugin";
import path from "path";
import { cloneBaseRepo, updateBaseRepo } from "../stages/cloneRepo";
import { prompt } from "enquirer";
import { appData } from "@ulld/utilities/appData";
import terminalLink from "terminal-link";
import { log } from "console";
import { PackageManagers } from "../types";
import { Prompter } from "./prompter";
import { SubSlot } from "./subslot";
import { PluginSlot } from "./slot";
import { SlotConflict } from "./slotConflict";
import { PluginSlotKey } from "@ulld/configschema/developerTypes";
import { PluginPage } from "./page";
import { PageConflict } from "./pageConflict";

export class UlldBuildProcess extends Prompter {
    plugins: UlldPlugin[] = [];
    noteTypes: NoteType[] = [];
    appConfig: UlldAppConfigManager;
    paths: TargetPaths;
    applicationDir: string;
    packageJson: TargetPackageJson;
    isLocalDev: boolean;
    packageManager: PackageManagers = "pnpm";
    slotConflicts: SlotConflict[] = [];
    pageConflicts: PageConflict[] = [];
    constructor(public targetDir: string) {
        super();
        this.isLocalDev = process.env.LOCAL_DEVELOPMENT === "true";
        this.applicationDir = path.join(
            targetDir,
            appData.templateRepo.buildDirName,
        );
        this.paths = new TargetPaths(this.applicationDir, this.isLocalDev);
        this.appConfig = new UlldAppConfigManager(
            this.applicationDir,
            this.isLocalDev,
        );
        this.packageJson = new TargetPackageJson(
            this.applicationDir,
            this.isLocalDev,
        );
        this.gatherSlotConflicts();
        this.gatherPageConflicts();
    }
    /** Returns true if a project exists at the targetDir and if that project is a ULLD app. */
    projectExists() {
        return [
            this.packageJson.exists(),
            this.packageJson.includesUlldDependencies(),
            this.paths.targetDirExists(),
        ].every((a) => a);
    }
    async gatherPlugins() {
        this.log(
            `Gathering ${chalk.hex("#0ba5e9")("U")}LLD plugins from your appConfig...`,
        );
        this.plugins =
            this.appConfig.config?.plugins.map(
                (c) => new UlldPlugin(this.targetDir, c.name, c.version),
            ) || [];
        this.log(`Found ${this.plugins.length} plugins:`);
        for (const k of this.plugins) {
            this.log(k.name);
        }
        this.applyPluginsToPackageJson();
        this.packageJson.write();
    }
    applyPluginsToPackageJson() {
        this.log(
            `Generating a package.json file specific to your configuration...`,
        );
        let pkg = this.packageJson.data;
        console.log("pkg: ", pkg);
        if (!pkg) {
            process.exit(`UNDEFINED_PKG_DATA

It's not you it's me. Something broked.
`);
        }
        let hasNew = false;
        console.log("hasNew: ", hasNew);
        for (const k of this.plugins) {
            console.log("k: ", k);
            let pkgRes = k.applyDependency(pkg);
            pkg = pkgRes.pkg;
            if (pkgRes.isNew && !hasNew) {
                hasNew = true;
            }
        }
        this.packageJson.data = pkg;
        console.log(`This is the end...`);
    }
    async gatherAppConfig() {
        if (!this.appConfig.exists) {
            const shouldContinue = await prompt({
                type: "confirm",
                name: "addedConfig",
                initial: true,
                message: `We couldn't find configuration file in either your app's
directory or through the ULLD_APP_CONFIG environment variable. 
Drop a configuration file in the app directory now at
${this.applicationDir}
and continue when that file is in place.`,
            });
            if ("addedConfig" in shouldContinue && shouldContinue.addedConfig) {
                let nowValid = this.appConfig.checkDirectoryConfig();
                if (!nowValid) {
                    log(
                        "We still can't find your config. Please look over the docs " +
                        terminalLink("here", "https://uhlittlelessdum.com/docs/user"),
                    );
                    process.exit(1);
                }
            }
        }
        this.appConfig.gather();
    }
    async checkPluginValidity() {
        let invalidPlugins: UlldPlugin[] = [];
        for (const k of this.plugins) {
            if (!k.isValid()) {
                invalidPlugins.push(k);
            }
        }
        if (invalidPlugins.length) {
            let shouldContinue =
                await this.confirmContinueWithInvalidPlugins(invalidPlugins);
            if (!shouldContinue) {
                this.kBye();
            }
        }
    }
    getAllSlots() {
        return this.plugins
            .filter((f) => f.slot)
            .map((f) => f.slot) as PluginSlot[];
    }
    async gatherPageConflicts() {
        let pageMap: Record<string, PluginPage[]> = {};
        for (const p of this.plugins) {
            for (const k of p.pages) {
                if (!pageMap[k.data.targetUrl]) {
                    pageMap[k.data.targetUrl] = [];
                }
                pageMap[k.data.targetUrl].push(k);
            }
        }
        for (const l in pageMap) {
            if (pageMap[l].length > 1) {
                this.pageConflicts.push(new PageConflict(l, pageMap[l]));
            }
        }
    }
    gatherSlotConflicts() {
        let allSlots = this.getAllSlots();
        let slotMap: Record<
            PluginSlotKey,
            Record<string, SubSlot[]>
        > = {} as Record<PluginSlotKey, Record<string, SubSlot[]>>;
        for (const k of allSlots) {
            if (!slotMap[k.slot]) {
                slotMap[k.slot] = {};
            }
            for (const l of k.subslots) {
                if (!slotMap[k.slot][l.subSlot]) {
                    slotMap[k.slot][l.subSlot] = [];
                }
                slotMap[k.slot][l.subSlot].push(l);
            }
        }
        for (const w in slotMap) {
            for (const z in slotMap[w as PluginSlotKey]) {
                if (slotMap[w as PluginSlotKey][z].length > 1) {
                    this.slotConflicts.push(
                        new SlotConflict(
                            w as PluginSlotKey,
                            z,
                            slotMap[w as PluginSlotKey][z],
                        ),
                    );
                }
            }
        }
    }
    async resolveSlotConflicts() {
        if (this.slotConflicts.length > 0) {
            await this.getSlotPreferences(this.slotConflicts);
        }
    }
    async createBaseProject() {
        let exists = this.projectExists();
        let success = false;
        if (!exists) {
            log(
                `Great! Give me a second to clone the ${chalk.hex("#0ba5e9")("U")}LLD code base onto your machine. This might take a minute or two.`,
            );
            success = await cloneBaseRepo(this.targetDir);
        } else {
            log(
                `It looks like a ${chalk.hex("#0ba5e9")("U")}LLD project already exists in this directory. Let's just try to update it.`,
            );
            success = await updateBaseRepo(this.targetDir);
        }
        if (success) {
            log(`We have a baseline ${chalk.hex("#0ba5e9")("U")}LLD app now!`);
        }
        return success;
    }
}
