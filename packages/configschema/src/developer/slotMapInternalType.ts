import type { SlotDataType } from "@ulld/utilities/types";
import type { SlotMap } from "./slotMapRootType.js";

export type SlotMapInternalType = {
    [K in keyof SlotMap]: {
        [S in keyof SlotMap[K]]: SlotDataType 
    }
}


export type SlotMapOfType<T> = {
    [K in keyof SlotMap]: {
        [S in keyof SlotMap[K]]: T
    }
}
