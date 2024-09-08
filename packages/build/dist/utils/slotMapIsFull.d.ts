import { AnySubSlotKey, PluginSlotKey } from "@ulld/configschema/slotMapType";
import { SlotMapOfType } from "@ulld/configschema/slotMapInternalType";
interface MissingItem {
    slot: PluginSlotKey;
    subSlot: AnySubSlotKey;
}
export declare const slotMapIsFull: (data: SlotMapOfType<any>) => {
    passed: boolean;
    missingItems: MissingItem[];
};
export {};
