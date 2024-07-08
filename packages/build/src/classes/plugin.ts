import { PackageJsonType } from "@ulld/developer-schemas/fullPackageJson";
import { DeveloperConfigOutput } from "@ulld/configschema/developer";
import path from "path";
import fs from "fs";
import { PluginSlotKey } from "@ulld/configschema/developerTypes";
import { PluginSlot } from "./slot";
import { PluginComponent } from "./component";
import { PluginPage } from "./page";
import { PluginParser } from "./parser";
import { PluginEvents } from "./pluginEvents";
import { TargetPaths } from "./paths";
import { ShellManager } from "./baseClasses/shell";

export class UlldPlugin extends ShellManager {
    pluginConfig: DeveloperConfigOutput | "Unusable" = "Unusable";
    inConfigAsSlot: boolean = false;
    packageRoot: string;
    hasConfig: boolean = false;
    slot?: PluginSlot;
    components: PluginComponent[] = [];
    parsers: PluginParser[] = [];
    pages: PluginPage[] = [];
    events: PluginEvents = new PluginEvents({});
    targetDir: string;
    embeddables?: (NonNullable<
        (typeof this.components)[number]["data"]["embeddable"]
    >[number] & { export: string; componentName: string })[];
    constructor(
        public paths: TargetPaths,
        public name: string,
        public version?: string,
    ) {
        super();
        this.targetDir = paths.targetDir;
        this.packageRoot = path.join(this.targetDir, "node_modules", this.name);
        let configPath = path.join(this.packageRoot, "pluginConfig.ulld.json");
        if (!fs.existsSync(configPath)) {
            let packageJsonPath = path.join(this.packageRoot, "package.json");
            if (!fs.existsSync(packageJsonPath)) {
                this.noConfigError();
                return;
            }
            let packageJsonData = JSON.parse(
                fs.readFileSync(packageJsonPath, { encoding: "utf-8" }),
            );
            if (!packageJsonData["ulld-pluginConfig"]) {
                this.noConfigError();
                return;
            }
            this.pluginConfig = packageJsonData["ulld-pluginConfig"] as typeof this.pluginConfig
        }
        this.hasConfig = true;
        this.pluginConfig = JSON.parse(
            fs.readFileSync(configPath, { encoding: "utf-8" }),
        ) as DeveloperConfigOutput;
        if ((this.pluginConfig as any) !== "Unusable") {
            this.events = new PluginEvents(this.pluginConfig?.events || {});
            if (this.pluginConfig?.slot) {
                this.slot = new PluginSlot(
                    this.name,
                    this.pluginConfig.slot as PluginSlotKey,
                );
            }
            this.components = this.pluginConfig.components.map(
                (f) =>
                    new PluginComponent(f, {
                        parentSlot: (this.pluginConfig as DeveloperConfigOutput)?.slot,
                        pluginName: this.name,
                    }),
            );
            this.parsers = this.pluginConfig.parsers.map((f) => new PluginParser(f));
            this.pages = this.pluginConfig.pages.map(
                (p, i) => new PluginPage(p, this.name, i, this.paths, this.slot?.slot),
            );
        }
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

    getEmbeddables() {
        let em: typeof this.embeddables = [];
        if (this.embeddables) {
            return this.embeddables;
        }
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
                    });
                }
            }
        }
        this.embeddables = em;
        return em;
    }

    getUniqueEmbeddableComponents() {
        let ems = this.getEmbeddables();
        let embeddables: typeof ems = [];
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
        let embeddables = this.getEmbeddables();
        let s = "";
        for (const k of embeddables) {
            s += `    {
        regex: new RegExp("${k.regexToInclude}"),
        component: ${k.componentName},
        label: "${k.label}",
    },
`;
        }
        return s;
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
    async applyPages() {
        for await (const k of this.pages) {
            await k.writePage();
        }
    }
}
