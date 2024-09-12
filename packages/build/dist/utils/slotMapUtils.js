import fullSlotMap from "@ulld/utilities/slotMap.json" with { type: "json" };
export const walkSlotMap = (slotMap, getData) => {
    let s = {};
    for (const k in slotMap) {
        for (const l in slotMap[k]) {
            if (!s[k]) {
                s[k] = {};
            }
            /* @ts-ignore */
            s[k][l] = getData(slotMap[k][l], k, l);
        }
    }
    return s;
};
export const flattenSlotMap = (slotMap) => {
    let d = [];
    for (const k in slotMap) {
        for (const l in slotMap[k]) {
            d.push({
                slot: k,
                subSlot: l,
                /* @ts-ignore */
                data: slotMap[k][l],
            });
        }
    }
    return d;
};
export const forceFullSlotMap = (slotMap, defaultValue = false) => {
    /* @ts-ignore */
    return walkSlotMap(fullSlotMap, (val, slot, subSlot) => slotMap[slot]?.[subSlot] ? slotMap[slot][subSlot] : defaultValue);
};
export const generateSlotMapOfType = (cb) => {
    let d = {};
    for (const slot in fullSlotMap) {
        for (const subSlot in fullSlotMap[slot]) {
            if (!d[slot]) {
                d[slot] = {};
            }
            /* @ts-ignore */
            d[slot][subSlot] = cb(slot, subSlot);
        }
    }
    return d;
};
export const getSlotMapData = (parentSlot, subSlot) => {
    return fullSlotMap[parentSlot][subSlot];
};
