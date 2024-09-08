import { TargetPaths } from "./paths.js";
import { AnySubSlotKey, PluginSlotKey } from "@ulld/configschema/slotMapType";
import type { SlotDataType } from "@ulld/utilities/slotDataType";
export declare class SubSlot {
    pluginName: string;
    parentSlot: PluginSlotKey;
    subSlot: AnySubSlotKey;
    paths: TargetPaths;
    exportedPropsName?: string | undefined;
    shouldUse: boolean;
    itemData: SlotDataType;
    constructor(pluginName: string, parentSlot: PluginSlotKey, subSlot: AnySubSlotKey, paths: TargetPaths, exportedPropsName?: string | undefined);
    cancel(): void;
    writeToFile(formattedExport: string, componentImport: string): void;
}
