import { DeveloperConfigOutput } from "@ulld/configschema/developer";
import { SubSlot } from "./subslot.js";
import { ShellManager } from "./baseClasses/shell.js";
import { TargetPaths } from "./paths.js";
import { PackageJson } from "./baseClasses/pkgJson.js";
import { PluginComponentProps } from "../types.js";
import { BuildStaticDataInput } from "@ulld/configschema/buildTypes";
import { AnySubSlotKey, PluginSlotKey } from "@ulld/configschema/slotMapType";
export declare class PluginComponent extends ShellManager {
    data: DeveloperConfigOutput["components"][number];
    paths: TargetPaths;
    packageJson: PackageJson;
    subSlot?: SubSlot;
    subSlotKey?: AnySubSlotKey;
    slotKey?: PluginSlotKey;
    pluginName: string;
    formattedExport: string;
    formattedImportName: string;
    formattedComponentName: string;
    haveModifiedImportName: boolean;
    formattedPluginName: string;
    initialComponentImport: string;
    hasDocsData: boolean;
    docsData: NonNullable<BuildStaticDataInput["componentDocs"]>[number];
    inputFilePaths: {
        short?: string;
        full?: string;
    };
    constructor(data: DeveloperConfigOutput["components"][number], props: PluginComponentProps, paths: TargetPaths, packageJson: PackageJson);
    getInputFilePathOfType(type: "full" | "short"): string | undefined;
    getOutputFilePath(type: "short" | "full"): string;
    getDocsData(): NonNullable<BuildStaticDataInput["componentDocs"]>[number];
    logWriteToFile(): void;
    writeToFile(): void;
    copyDocsData(): void;
}
