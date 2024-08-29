import path from "path";
import { PluginSlot } from "./slot.js";
import { PluginComponent } from "./component.js";
import { PluginPage } from "./page.js";
import { PluginParser } from "./parser.js";
import { PluginEvents } from "./pluginEvents.js";
import { ShellManager } from "./baseClasses/shell.js";
import { PackageJson } from "./baseClasses/pkgJson.js";
import { PluginSettingsPage } from "./pluginSettingsPage.js";
import { Path } from "./utilityClasses/Path.js";
import { JsonFile } from "@ulld/utilities/jsonFileClass";
import devData from "../../staticDevelopmentData.json" with { type: "json" };
export class UlldPlugin extends ShellManager {
    constructor(paths, name, version = "latest", baseAppGitBranch) {
        super();
        this.paths = paths;
        this.name = name;
        this.version = version;
        this.baseAppGitBranch = baseAppGitBranch;
        this.pluginConfig = "Unusable";
        this.inConfigAsSlot = false;
        this.hasConfig = false;
        this.components = [];
        this.parsers = [];
        this.pages = [];
        this.includeInTailwindSources = false;
        this.hasDocumentation = false;
        this.targetDir = paths.targetDir;
        this.packageRoot = path.join(this.targetDir, "node_modules", this.name);
        this.gatherConfig(true);
    }
    gatherConfig(noError) {
        let configPath = path.join(this.packageRoot, "pluginConfig.ulld.json");
        this.logDebug(`Looking for ${this.name} config at ${configPath}`);
        let configFile = new JsonFile(configPath);
        let pkgJsonFile = new JsonFile(path.join(path.join(this.packageRoot, "package.json")));
        let pkgExists = pkgJsonFile.exists();
        let pkgContent = pkgExists ? pkgJsonFile.getJsonContent() : {};
        if (!pkgExists && !noError) {
            throw new Error(`Could not locate package.json file for the ${this.name} plugin. This is likely an error in the build process, not the plugin.`);
        }
        this.packageJson = new PackageJson(this.paths.projectRoot, pkgJsonFile.path, this.baseAppGitBranch);
        let foundConfig = false;
        if (configFile.exists()) {
            this.pluginConfig = configFile.getJsonContent();
            foundConfig = true;
            this.hasConfig = true;
        }
        else {
            if ("ulld-pluginConfig" in pkgContent) {
                this.pluginConfig = pkgContent["ulld-pluginConfig"];
                foundConfig = true;
                this.hasConfig = true;
            }
        }
        if (!this.packageJson) {
            this.noPackageJsonError(noError);
            return;
        }
        if (this.pluginConfig === "Unusable") {
            return;
        }
        if (this.pluginConfig !== "Unusable") {
            this.events = new PluginEvents(this.pluginConfig.events || {}, this.paths, this.name);
            this.components = this.pluginConfig.components.map((f) => new PluginComponent(f, {
                parentSlot: this.pluginConfig?.slot,
                pluginName: this.name,
            }, this.paths, this.packageJson));
            if (this.pluginConfig?.slot) {
                this.slot = new PluginSlot(this.name, this.pluginConfig.slot, this.components, this.paths);
            }
            if (this.pluginConfig.parsers) {
                for (const parserKey in this.pluginConfig.parsers) {
                    this.parsers.push(new PluginParser(parserKey, this.pluginConfig, this.paths));
                }
            }
            this.pages = this.pluginConfig.pages.map((p, i) => new PluginPage(p, this.name, i, this.paths, this.slot?.slot, p.slot));
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
    noPackageJsonError(noError) {
        this.hasConfig = false;
        if (noError)
            return;
        this.logError(`No package.json was found for the ${this.name} plugin. This plugin will be overridden.`);
    }
    noConfigError(noError) {
        this.hasConfig = false;
        if (noError)
            return;
        this.log(`No plugin configuration was found for the ${this.name} plugin. This plugin will be overridden.`);
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
        let em = [];
        let componentsWithEmbeddable = this.components.filter((f) => f.data.embeddable);
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
        let embeddables = [];
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
        let data = [];
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
        if (!this.pluginConfig ||
            this.pluginConfig === "Unusable" ||
            !this.pluginConfig.documentation ||
            !this.packageJson) {
            return;
        }
        let exportPath = this.pluginConfig.documentation;
        if (!exportPath) {
            return undefined;
        }
        let subPath = this.packageJson.getSubPathByExport(exportPath);
        if (!subPath) {
            return undefined;
        }
        let inputPathString = this.paths.getPathInNodeModule(this.name, subPath);
        let inputPath = new Path(inputPathString);
        let outputPath = new Path(this.paths.joinPath("pluginDocumentation", `${encodeURI(this.name)}.mdx`));
        if (inputPath.getExists()) {
            inputPath.copyContentTo(outputPath);
        }
    }
    applyDependency(pkg) {
        let isNew = this.name in pkg.dependencies;
        pkg.dependencies = {
            ...pkg.dependencies,
            [this.name]: this.version || "latest",
        };
        return { pkg: pkg, isNew };
    }
}
