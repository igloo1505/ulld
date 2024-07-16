import { SlotDataType } from "@ulld/utilities/types";
import { SlotMap } from "./slotMapRootType";

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
