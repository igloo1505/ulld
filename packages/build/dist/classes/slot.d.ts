import { PluginComponent } from "./component.js";
import { TargetPaths } from "./paths.js";
import { AnySubSlotKey, PluginSlotKey } from "@ulld/configschema/slotMapType";
type SlotRecord = {
    [K in AnySubSlotKey]?: PluginComponent;
};
export declare class PluginSlot {
    pluginName: string;
    slot: PluginSlotKey;
    paths: TargetPaths;
    subSlotComponents: PluginComponent[];
    slots: SlotRecord;
    constructor(pluginName: string, slot: PluginSlotKey, components: PluginComponent[], paths: TargetPaths);
    occupiesAllSlots(): boolean;
}
export {};
