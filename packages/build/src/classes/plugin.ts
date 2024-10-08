import { PackageJsonType } from "@ulld/developer-schemas/fullPackageJson";
import { DeveloperConfigOutput, ParserKey } from "@ulld/configschema/developer";
import path from "path";
import { PluginSlot } from "./slot.js";
import { PluginComponent } from "./component.js";
import { PluginPage } from "./page.js";
import { PluginParser } from "./parser.js";
import { PluginEvents } from "./pluginEvents.js";
import { TargetPaths } from "./paths.js";
import { ShellManager } from "./baseClasses/shell.js";
import { PackageJson } from "./baseClasses/pkgJson.js";
import { PluginSettingsPage } from "./pluginSettingsPage.js";
import { Path } from "./utilityClasses/Path.js";
import { JsonFile } from "@ulld/utilities/jsonFileClass";
import devData from "../../staticDevelopmentData.json"  with {type: "json"};
import { AnySubSlotKey, PluginSlotKey } from "@ulld/configschema/slotMapType";

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
    packageJson?: PackageJson;
    settingsPage?: PluginSettingsPage;
    includeInTailwindSources: boolean = false;
    hasDocumentation: boolean = false;
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
        public version: string = "latest",
        public baseAppGitBranch: string,
    ) {
        super();
        this.targetDir = paths.targetDir;
        this.packageRoot = path.join(this.targetDir, "node_modules", this.name);
        this.gatherConfig(true);
    }
    gatherConfig(noError?: boolean) {
        let configPath = path.join(this.packageRoot, "pluginConfig.ulld.json");
        this.logDebug(`Looking for ${this.name} config at ${configPath}`);
        let configFile = new JsonFile<DeveloperConfigOutput>(configPath);
        let pkgJsonFile = new JsonFile<{
            "ulld-pluginConfig": DeveloperConfigOutput;
        }>(path.join(path.join(this.packageRoot, "package.json")));
        let pkgExists = pkgJsonFile.exists()
        let pkgContent = pkgExists ? pkgJsonFile.getJsonContent() : {}
        if (!pkgExists && !noError) {
            throw new Error(
                `Could not locate package.json file for the ${this.name} plugin. This is likely an error in the build process, not the plugin.`
            );
        }
        this.packageJson = new PackageJson(
            this.paths.projectRoot,
            pkgJsonFile.path,
            this.baseAppGitBranch,
        );
        let foundConfig = false;
        if (configFile.exists()) {
            this.pluginConfig = configFile.getJsonContent();
            foundConfig = true;
            this.hasConfig = true
        } else {
                if ("ulld-pluginConfig" in pkgContent) {
                    this.pluginConfig = (pkgContent as any)["ulld-pluginConfig"];
                    foundConfig = true;
                    this.hasConfig = true
                }
        }
        if (!this.packageJson) {
            this.noPackageJsonError(noError);
            return;
        }
        if(this.pluginConfig === "Unusable") {
            return
        }
        if ((this.pluginConfig as any) !== "Unusable") {
            this.events = new PluginEvents(
                this.pluginConfig.events || {},
                this.paths,
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
                        this.packageJson!,
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
        this.hasDocumentation = Boolean(this.pluginConfig.documentation);
        this.embeddables = this.getEmbeddables();
        this.includeInTailwindSources = this.name.startsWith("@ulld") ? false : (devData.includeInTailwindSources.includes(this.name) || [
            this.embeddables,
            this.pages,
            this.components,
        ].some((x) => Boolean(x && x.length)));
    }
    noPackageJsonError(noError?: boolean) {
        this.hasConfig = false;
        if (noError) return;
        this.logError(
            `No package.json was found for the ${this.name} plugin. This plugin will be overridden.`,
        );
    }
    noConfigError(noError?: boolean) {
        this.hasConfig = false;
        if (noError) return;
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
    copyDocumentation() {
        if (
            !this.pluginConfig ||
            this.pluginConfig === "Unusable" ||
            !this.pluginConfig.documentation ||
            !this.packageJson
        ) {
            return;
        }
        let exportPath = this.pluginConfig.documentation as string;
        if (!exportPath) {
            return undefined;
        }
        let subPath = this.packageJson.getSubPathByExport(exportPath);
        if (!subPath) {
            return undefined;
        }
        let inputPathString = this.paths.getPathInNodeModule(this.name, subPath);
        let inputPath = new Path(inputPathString);
        let outputPath = new Path(
            this.paths.joinPath("pluginDocumentation", `${encodeURI(this.name)}.mdx`),
        );
        if (inputPath.getExists()) {
            inputPath.copyContentTo(outputPath);
        }
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
