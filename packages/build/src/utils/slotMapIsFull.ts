import { SlotMapOfType } from "@ulld/configschema/types";
import { flattenSlotMap, forceFullSlotMap, walkSlotMap } from "./slotMapUtils.js";
import { AnySubSlotKey, PluginSlotKey } from "@ulld/configschema/developerTypes";

interface MissingItem {
    slot: PluginSlotKey;
    subSlot: AnySubSlotKey;
}

export const slotMapIsFull = (
    data: SlotMapOfType<any>,
): {
    passed: boolean;
    missingItems: MissingItem[];
} => {
    let mapData = forceFullSlotMap(data, false);
    let walkedData = walkSlotMap(mapData, (x) => Boolean(x));
    let flattenedMap = flattenSlotMap(walkedData);
    let missingKeys: MissingItem[] = [];
    for (const k of flattenedMap) {
        if (!k.data) {
            missingKeys.push({
                slot: k.slot,
                subSlot: k.subSlot,
            });
        }
    }
    return {
        passed: missingKeys.length === 0,
        missingItems: missingKeys,
    };
};
