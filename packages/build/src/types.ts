import { BuildStaticDataOutput } from "@ulld/configschema/buildTypes";
import type { DeveloperConfigOutput } from "@ulld/configschema/developer";
import { PluginSlotKey } from "@ulld/configschema/slotMapType";

export type PackageManagers = "pnpm" | "npm" | "yarn";

export interface ComponentDocsData {
    outputFilePath: string;
    filePath: string;
    export: string;
    href: string
}

export interface DocPaths {
    full?: ComponentDocsData;
    short?: ComponentDocsData;
}

export interface PluginComponentProps {
    pluginName: string;
    parentSlot?: PluginSlotKey;
}

export type EventMethodKey = keyof NonNullable<DeveloperConfigOutput["events"]>;

export type SettingPageOutputData =
    BuildStaticDataOutput["settingPages"][number];


declare global {
  namespace PrismaJson {
    // you can use classes, interfaces, types, etc.
    type PluginSettingsRecord = Record<string, Record<string, any>>
  }
}


export interface BuildOutputData {
    buildOutputPath: string;
}


export interface BuildConfig {
   branch: string
}
