import { TargetPaths } from "./paths.js";
import { ShellManager } from "./baseClasses/shell.js";
import { AnySubSlotKey, PluginSlotKey } from "@ulld/configschema/slotMapType";
export declare class PluginAdditionalPage extends ShellManager {
    pluginName: string;
    parentSlot: PluginSlotKey | undefined;
    subSlot: AnySubSlotKey | undefined;
    paths: TargetPaths;
    constructor(pluginName: string, parentSlot: PluginSlotKey | undefined, subSlot: AnySubSlotKey | undefined, paths: TargetPaths);
    writeToFile(formattedExport: string, formattedComponentImport: string): void;
}
