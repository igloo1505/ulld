import chalk from "chalk";
import { UlldAppConfigManager } from "./appConfig";
import { NoteType } from "./noteType";
import { TargetPaths } from "./paths";
import { TargetPackageJson } from "./pkgJson";
import { UlldPlugin } from "./plugin";
import path from "path";
import { prompt } from "enquirer";
import { appData } from "@ulld/utilities/appData";
import terminalLink from "terminal-link";
import { log } from "console";
import { PackageManagers } from "../types";
import { Prompter } from "./prompter";
import { SubSlot } from "./subslot";
import { PluginSlot } from "./slot";
import { SlotConflict } from "./slotConflict";
import { SlotMap } from "@ulld/configschema/developerTypes";
import { PluginPage } from "./page";
import { PageConflict } from "./pageConflict";
import { GitManager } from "./baseClasses/gitManager";

type PluginSlotKey = keyof SlotMap;

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
    git: GitManager;
    constructor(public targetDir: string) {
        super(targetDir);
        this.git = new GitManager(targetDir);
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
        if (this.paths.targetDirExists() && this.packageJson.exists()) {
            this.packageJson.gather();
            return this.packageJson.includesUlldDependencies();
        }
        return false;
    }
    async gatherPlugins() {
        this.log(
            `Gathering ${chalk.hex("#0ba5e9")("U")}LLD plugins from your appConfig...`,
        );
        if (!this.appConfig.config) {
            throw new Error(
                `No app configuration was found during the gatherPlugins phase.`,
            );
        }
        let newPlugins: UlldPlugin[] = [];
        let fromConfigPlugins = this.appConfig.config?.plugins.map(
            (c) => new UlldPlugin(this.paths, c.name, c.version),
        ) || [] as UlldPlugin[];
        for (const k in this.appConfig.config.slots) {
            let newSlot =
                this.appConfig.config.slots[
                k as keyof typeof this.appConfig.config.slots
                ];
            if (Array.isArray(newSlot)) {
                for (const l of newSlot) {
                    newPlugins.push(new UlldPlugin(this.paths, l.name, l.version));
                }
            } else {
                this.logDebug(`Found a slot that was not added to plugins:
${JSON.stringify(k, null, 4)}
`)
            }
        }
        this.plugins = [...newPlugins, ...fromConfigPlugins];
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
        if (!pkg) {
            process.exit(`UNDEFINED_PKG_DATA

It's not you it's me. Something broked.
`);
        }
        let hasNew = false;
        for (const k of this.plugins) {
            let pkgRes = k.applyDependency(pkg);
            pkg = pkgRes.pkg;
            if (pkgRes.isNew && !hasNew) {
                hasNew = true;
            }
        }
        this.packageJson.data = pkg;
    }
    async gatherAppConfig() {
        if (!this.appConfig.exists) {
            const shouldContinue = await prompt({
                type: "confirm",
                name: "addedConfig",
                initial: true,
                message: `We couldn't find a configuration file in either your app's
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
        this.log(`Checking to make sure plugins provided are valid...`);
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
    async resolvePageConflicts() {
        if (this.slotConflicts.length > 0) {
            await this.getPagePreferences(this.pageConflicts);
            this.removePageConflicts();
        } else {
            this.log(
                this.slotConflicts.length === 0
                    ? `More great news! No page conflicts were found either!`
                    : `Good news! No page conflicts were found.`,
            );
        }
    }
    gatherSlotConflicts() {
        // let allSlots = this.getAllSlots();
        let slotMap: Record<
            PluginSlotKey,
            Record<string, SubSlot[]>
        > = {} as Record<PluginSlotKey, Record<string, SubSlot[]>>;
        let p = this.plugins.filter((f) => f.slot);
        for (const plugin of p) {
            for (const component of plugin.components) {
                if (component.subSlot) {
                    if (!slotMap[component.subSlot.parentSlot]) {
                        slotMap[component.subSlot.parentSlot] = {};
                    }
                    if (
                        !slotMap[component.subSlot.parentSlot][component.subSlot.subSlot]
                    ) {
                        slotMap[component.subSlot.parentSlot][component.subSlot.subSlot] =
                            [];
                    }
                    slotMap[component.subSlot.parentSlot][component.subSlot.subSlot].push(
                        component.subSlot,
                    );
                }
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
    removeSlotConflicts() {
        this.plugins.forEach((p) => p.removeRejectedSlots());
    }
    removePageConflicts() {
        for (const k of this.plugins) {
            k.removeUnusedPages();
        }
    }
    async resolveSlotConflicts() {
        if (this.slotConflicts.length > 0) {
            await this.getSlotPreferences(this.slotConflicts);
            this.removeSlotConflicts();
        } else {
            this.log(`Great news! No slot conflicts were found.`);
        }
    }
    async createBaseProject() {
        let exists = this.projectExists();
        let success = false;
        if (!exists) {
            success = await this.clone();
        } else {
            success = await this.gitPull();
        }
        if (success) {
            this.log(`We have a baseline ${this.ulld()} app now!`);
        }
        return success;
    }
    removeUnusablePlugins() {
        let pluginData: {
            usable: UlldPlugin[];
            unusable: UlldPlugin[];
        } = {
            usable: [],
            unusable: [],
        };
        for (const k of this.plugins) {
            pluginData[k.pluginConfig === "Unusable" ? "unusable" : "usable"].push(k);
        }
        if (pluginData.unusable.length === 0) {
            console.log(
                `Checked for issues with your plugins and found none! Continuing with the build process.`,
            );
        } else {
            for (const l of pluginData.unusable) {
                this.log(`Removing unsable plugin ${l.name}`);
            }
        }
        this.plugins = pluginData.usable;
    }
    convertSlotsToPlugins() { }
    async applyPages() {
        for await (const k of this.plugins) {
            await k.applyPages();
        }
    }
}
