import type { ValidIconName } from "@ulld/types/types"
import type {InternalAppLocationIds} from "./internalAppLocations";
import { internalAppLocationsLabelMap} from "./internalAppLocations"
import type {InternalGlobalActionIds} from "./internalGlobalActions";
import { internalGlobalActionsIdMap} from "./internalGlobalActions"

export type InternalLocationAndAction = {
    type: "action"
    id: InternalGlobalActionIds
    label: string
    defaultIcon: ValidIconName
} | {
    type: "url"
    id: InternalAppLocationIds
    label: string
}


export const getInternalLocationsAndActions = (): InternalLocationAndAction[] => {
    const items: InternalLocationAndAction[] = []
    for (const loc in internalAppLocationsLabelMap) {
        items.push({
            type: "url",
            label: internalAppLocationsLabelMap[loc as InternalAppLocationIds],
            id: loc as InternalAppLocationIds
        })
    }
    for (const actionId in internalGlobalActionsIdMap) {
        items.push({
            type: "action",
            id: actionId as InternalGlobalActionIds,
            label: internalGlobalActionsIdMap[actionId as InternalGlobalActionIds].label,
            defaultIcon: internalGlobalActionsIdMap[actionId as InternalGlobalActionIds].defaultIcon,
        })
    }
    return items
}
