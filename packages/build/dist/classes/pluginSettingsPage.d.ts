import { DeveloperConfigOutput } from "@ulld/configschema/developer";
import { TargetPaths } from "./paths.js";
import { ShellManager } from "./baseClasses/shell.js";
import { BuildStaticDataOutput } from "@ulld/configschema/buildTypes";
interface OutputData {
    filePath: string;
    url: string;
}
export declare class PluginSettingsPage extends ShellManager {
    paths: TargetPaths;
    pluginConfig: DeveloperConfigOutput;
    settingsConfig: DeveloperConfigOutput["settings"];
    hasContent: boolean;
    outputData?: OutputData;
    settingsPageData: BuildStaticDataOutput["settingPages"][number];
    constructor(paths: TargetPaths, pluginConfig: DeveloperConfigOutput);
    private validatePluginName;
    private getOutputPath;
    writePage(): void;
}
export {};
