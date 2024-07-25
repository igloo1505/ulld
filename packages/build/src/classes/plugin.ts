import { PackageJsonType } from "@ulld/developer-schemas/fullPackageJson";
import { DeveloperConfigOutput, ParserKey } from "@ulld/configschema/developer";
import path from "path";
import fs from "fs";
import {
    AnySubSlotKey,
    PluginSlotKey,
} from "@ulld/configschema/developerTypes";
import { PluginSlot } from "./slot";
import { PluginComponent } from "./component";
import { PluginPage } from "./page";
import { PluginParser } from "./parser";
import { PluginEvents } from "./pluginEvents";
import { TargetPaths } from "./paths";
import { ShellManager } from "./baseClasses/shell";
import { PackageJson } from "./baseClasses/pkgJson";
import { PluginSettingsPage } from "./pluginSettingsPage";

export class UlldPlugin extends ShellManager {
    pluginConfig: DeveloperConfigOutput | "Unusable" = "Unusable";
    inConfigAsSlot: boolean = false;
    packageRoot: string;
    hasConfig: boolean = false;
    slot?: PluginSlot;
    components: PluginComponent[] = [];
    parsers: PluginParser<any>[] = [];
    pages: PluginPage[] = [];
    events?: PluginEvents;
    targetDir: string;
    packageJson: PackageJson;
    settingsPage?: PluginSettingsPage;
    embeddables?: (NonNullable<
        (typeof this.components)[number]["data"]["embeddable"]
    >[number] & {
        export: string;
        componentName: string;
        generatedComponentName: string;
    })[];
    constructor(
        public paths: TargetPaths,
        public name: string,
        public version?: string,
    ) {
        super();
        this.targetDir = paths.targetDir;
        this.packageRoot = path.join(this.targetDir, "node_modules", this.name);
        let configPath = path.join(this.packageRoot, "pluginConfig.ulld.json");
        this.packageJson = new PackageJson(
            this.paths.projectRoot,
            path.join(this.packageRoot, "package.json"),
        );
        if (!fs.existsSync(configPath)) {
            this.logVerbose(`Could not find plugin config for ${this.name}`);
            if (!this.packageJson.exists()) {
                this.logDebug(`
No package.json file found for package ${this.name}. 
Attempted to find one at ${configPath}
`);
                this.noConfigError();
                return;
            }
            let pkgJsonConfig = this.packageJson.getPluginConfig();
            if (!pkgJsonConfig) {
                this.noConfigError();
                return;
            }
            this.pluginConfig = pkgJsonConfig;
        } else {
            this.logDebug(`Found plugin config for ${this.name}`);
        }
        this.hasConfig = true;
        this.pluginConfig = JSON.parse(
            fs.readFileSync(configPath, { encoding: "utf-8" }),
        ) as DeveloperConfigOutput;
        if ((this.pluginConfig as any) !== "Unusable") {
            this.events = new PluginEvents(
                this.pluginConfig?.events || {},
                paths,
                this.name,
            );
            this.components = this.pluginConfig.components.map(
                (f) =>
                    new PluginComponent(
                        f,
                        {
                            parentSlot: (this.pluginConfig as DeveloperConfigOutput)?.slot,
                            pluginName: this.name,
                        },
                        this.paths,
                        this.packageJson,
                    ),
            );
            if (this.pluginConfig?.slot) {
                this.slot = new PluginSlot(
                    this.name,
                    this.pluginConfig.slot as PluginSlotKey,
                    this.components,
                    this.paths,
                );
            }
            if (this.pluginConfig.parsers) {
                for (const parserKey in this.pluginConfig.parsers) {
                    this.parsers.push(
                        new PluginParser(
                            parserKey as ParserKey,
                            this.pluginConfig,
                            this.paths,
                        ),
                    );
                }
            }
            this.pages = this.pluginConfig.pages.map(
                (p, i) =>
                    new PluginPage(
                        p,
                        this.name,
                        i,
                        this.paths,
                        this.slot?.slot,
                        p.slot as AnySubSlotKey,
                    ),
            );
        }
        if (this.pluginConfig.settings) {
            this.settingsPage = new PluginSettingsPage(this.paths, this.pluginConfig);
        }
        this.embeddables = this.getEmbeddables();
    }
    noConfigError() {
        this.hasConfig = false;
        this.log(
            `No plugin configuration was found for the ${this.name} plugin. This plugin will be overridden.`,
        );
    }
    removeUnusedPages() {
        this.pages = this.pages.filter((f) => f.shouldUse);
    }
    removeRejectedSlots() {
        this.components = this.components.filter((c) => {
            if (c.subSlot && c.subSlot.shouldUse) {
                return false;
            }
            return true;
        });
    }

    private getEmbeddables() {
        let em: typeof this.embeddables = [];
        let componentsWithEmbeddable = this.components.filter(
            (f) => f.data.embeddable,
        );
        for (const component of componentsWithEmbeddable) {
            if (component && component.data.embeddable) {
                for (const embeddable of component.data.embeddable) {
                    em.push({
                        ...embeddable,
                        export: component.data.export,
                        componentName: component.data.componentName,
                        generatedComponentName: `${component.data.componentName[0].toUpperCase()}${component.data.componentName.slice(1)}`,
                    });
                }
            }
        }
        // this.embeddables = em;
        return em;
    }

    getUniqueEmbeddableComponents() {
        let ems = this.embeddables;
        let embeddables: typeof ems = [];
        if (!ems) {
            return embeddables;
        }
        for (const k of ems) {
            if (!embeddables.find((f) => f.componentName === k.componentName)) {
                embeddables.push(k);
            }
        }
        return embeddables;
    }

    getComponentMapImports() {
        let embeddables = this.getUniqueEmbeddableComponents();
        let s = "";
        for (const k of embeddables) {
            s += `import ${k.componentName} from "${this.name}/${k.export}";
`;
        }
        return s;
    }
    getComponentMapItemsAsString() {
        let embeddables = this.embeddables;
        let data: string[] = [];
        if (!embeddables) {
            return "";
        }
        for (const k of embeddables) {
            data.push(`    {
        regex: new RegExp("${k.regexToInclude}"),
        component: ${k.componentName},
        label: "${k.label}",
    }
`);
        }
        return data.join(",\n");
    }
    removeRejectedPages() {
        this.pages = this.pages.filter((p) => p.shouldUse);
    }
    isValid() {
        return this.hasConfig;
    }
    applyDependency(pkg: PackageJsonType): {
        pkg: PackageJsonType;
        isNew: boolean;
    } {
        let isNew = this.name! in pkg.dependencies;
        pkg.dependencies = {
            ...pkg.dependencies,
            [this.name]: this.version || "latest",
        };
        return { pkg: pkg, isNew };
    }
}
