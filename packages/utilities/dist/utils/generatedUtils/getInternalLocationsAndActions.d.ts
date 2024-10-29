import type { InternalGlobalActionIds, ValidIconName } from "@ulld/types/types";
import type { InternalAppLocationIds } from "./internalAppLocations";
export type InternalLocationAndAction = {
    type: "action";
    id: InternalGlobalActionIds;
    label: string;
    defaultIcon: ValidIconName;
} | {
    type: "url";
    id: InternalAppLocationIds;
    label: string;
};
export declare const getInternalLocationsAndActions: () => InternalLocationAndAction[];
//# sourceMappingURL=getInternalLocationsAndActions.d.ts.map