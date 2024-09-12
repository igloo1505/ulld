import fullSlotMap from "@ulld/utilities/slotMap.json" with { type: "json" };
import type { SlotMapOfType } from "@ulld/configschema/slotMapInternalType";
import type {
    AnySubSlotKey,
    PluginSlotKey,
} from "@ulld/configschema/slotMapType";

export const walkSlotMap = <T extends unknown, J extends unknown>(
    slotMap: SlotMapOfType<T>,
    getData: (val: T, slot: PluginSlotKey, subSlot: AnySubSlotKey) => J,
) => {
    let s: SlotMapOfType<J> = {} as SlotMapOfType<J>;
    for (const k in slotMap) {
        for (const l in slotMap[k as keyof typeof slotMap]) {
            if (!s[k as PluginSlotKey]) {
                s[k as PluginSlotKey] = {} as any;
            }
            /* @ts-ignore */
            s[k as keyof typeof s][l as any] = getData(
                slotMap[k as keyof typeof slotMap][l as keyof typeof slotMap[keyof typeof slotMap]] as T,
                k as PluginSlotKey,
                l as AnySubSlotKey,
            );
        }
    }
    return s;
};

type FlattenedSlotMap<T extends unknown> = {
    slot: PluginSlotKey;
    subSlot: AnySubSlotKey;
    data: T;
}[];

export const flattenSlotMap = <T extends unknown>(
    slotMap: SlotMapOfType<T>,
): FlattenedSlotMap<T> => {
    let d: FlattenedSlotMap<T> = [];
    for (const k in slotMap) {
        for (const l in slotMap[k as keyof typeof slotMap]) {
            d.push({
                slot: k as PluginSlotKey,
                subSlot: l as AnySubSlotKey,
                /* @ts-ignore */
                data: slotMap[k as keyof typeof slotMap][l as any] as T,
            });
        }
    }
    return d;
};

export const forceFullSlotMap = <T extends unknown, J extends unknown>(
    slotMap: SlotMapOfType<T>,
    defaultValue: J = false as any,
): SlotMapOfType<T | J> => {
    /* @ts-ignore */
    return walkSlotMap(fullSlotMap, (val, slot, subSlot) =>
        slotMap[slot as keyof typeof slotMap]?.[subSlot as keyof typeof slotMap[keyof typeof slotMap]] ? slotMap[slot as keyof typeof slotMap][subSlot as keyof typeof slotMap[keyof typeof slotMap]] : defaultValue,
    ) as SlotMapOfType<T | J>;
};

export const generateSlotMapOfType = <T extends unknown>(
    cb: (slot: PluginSlotKey, subSlot: AnySubSlotKey) => T,
): SlotMapOfType<T> => {
    let d: SlotMapOfType<T> = {} as SlotMapOfType<T>;

    for (const slot in fullSlotMap) {
        for (const subSlot in fullSlotMap[slot as keyof typeof fullSlotMap]) {
            if (!d[slot as keyof typeof d]) {
                d[slot as keyof typeof d] = {} as any;
            }
            /* @ts-ignore */
            d[slot as keyof typeof d][subSlot as any] = cb(
                slot as PluginSlotKey,
                subSlot as AnySubSlotKey,
            );
        }
    }
    return d;
};

export const getSlotMapData = <T extends PluginSlotKey>(
    parentSlot: T,
    subSlot: keyof (typeof fullSlotMap)[T],
) => {
    return fullSlotMap[parentSlot][subSlot];
};
