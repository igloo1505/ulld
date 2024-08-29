import { flattenSlotMap, forceFullSlotMap, walkSlotMap } from "./slotMapUtils.js";
export const slotMapIsFull = (data) => {
    let mapData = forceFullSlotMap(data, false);
    let walkedData = walkSlotMap(mapData, (x) => Boolean(x));
    let flattenedMap = flattenSlotMap(walkedData);
    let missingKeys = [];
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
