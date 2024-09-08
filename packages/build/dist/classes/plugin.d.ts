import { PackageJsonType } from "@ulld/developer-schemas/fullPackageJson";
import { DeveloperConfigOutput } from "@ulld/configschema/developer";
import { PluginSlot } from "./slot.js";
import { PluginComponent } from "./component.js";
import { PluginPage } from "./page.js";
import { PluginParser } from "./parser.js";
import { PluginEvents } from "./pluginEvents.js";
import { TargetPaths } from "./paths.js";
import { ShellManager } from "./baseClasses/shell.js";
import { PackageJson } from "./baseClasses/pkgJson.js";
import { PluginSettingsPage } from "./pluginSettingsPage.js";
export declare class UlldPlugin extends ShellManager {
    paths: TargetPaths;
    name: string;
    version: string;
    baseAppGitBranch: string;
    pluginConfig: DeveloperConfigOutput | "Unusable";
    inConfigAsSlot: boolean;
    packageRoot: string;
    hasConfig: boolean;
    slot?: PluginSlot;
    components: PluginComponent[];
    parsers: PluginParser<any>[];
    pages: PluginPage[];
    events?: PluginEvents;
    targetDir: string;
    packageJson?: PackageJson;
    settingsPage?: PluginSettingsPage;
    includeInTailwindSources: boolean;
    hasDocumentation: boolean;
    embeddables?: (NonNullable<(typeof this.components)[number]["data"]["embeddable"]>[number] & {
        export: string;
        componentName: string;
        generatedComponentName: string;
    })[];
    constructor(paths: TargetPaths, name: string, version: string, baseAppGitBranch: string);
    gatherConfig(noError?: boolean): void;
    noPackageJsonError(noError?: boolean): void;
    noConfigError(noError?: boolean): void;
    removeUnusedPages(): void;
    removeRejectedSlots(): void;
    private getEmbeddables;
    getUniqueEmbeddableComponents(): ({
        label: string;
        regexToInclude: string;
    } & {
        export: string;
        componentName: string;
        generatedComponentName: string;
    })[];
    getComponentMapImports(): string;
    getComponentMapItemsAsString(): string;
    removeRejectedPages(): void;
    isValid(): boolean;
    copyDocumentation(): undefined;
    applyDependency(pkg: PackageJsonType): {
        pkg: PackageJsonType;
        isNew: boolean;
    };
}
