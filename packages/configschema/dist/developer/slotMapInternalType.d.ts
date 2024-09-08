import { SlotDataType } from "@ulld/utilities/types";
import { SlotMap } from "./slotMapRootType.js";
export type SlotMapInternalType = {
    [K in keyof SlotMap]: {
        [S in keyof SlotMap[K]]: SlotDataType;
    };
};
export type SlotMapOfType<T> = {
    [K in keyof SlotMap]: {
        [S in keyof SlotMap[K]]: T;
    };
};
//# sourceMappingURL=slotMapInternalType.d.ts.map