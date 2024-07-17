import { DeveloperConfigInput, PluginSlotKey } from "@ulld/types";

export type PackageManagers = "pnpm" | "npm" | "yarn";

export interface ComponentDocsData {
    outputFilePath: string;
    filePath: string;
    export: string;
}

export interface DocPaths {
    full?: ComponentDocsData;
    short?: ComponentDocsData;
}

export interface PluginComponentProps {
    pluginName: string;
    parentSlot?: PluginSlotKey;
}

export type EventMethodKey = keyof NonNullable<DeveloperConfigInput["events"]>
