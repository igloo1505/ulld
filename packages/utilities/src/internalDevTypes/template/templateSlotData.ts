// Slot: commandPalette/commandPalette propsExtends:CommandPalettePopoverProps

import type { SlotDataType } from "../../types/slotDataType";

type SlotPackage =
    | "snippets"
    | "math"
    | "editor"
    | "UI"
    | "bibliography"
    | "taskManager"
    | "pdf"
    | "navigation"
    | "dashboard"
    | "form"
    | "commandPalette";

type SlotType =
    | "page"
    | "component"
    | "modalPage"
    | "embeddable"
    | "generatedPage";


export interface TemplateSlotData extends Omit<SlotDataType, "path"> {
    package: SlotPackage;
    slot: Capitalize<string>;
    clientOnly?: boolean;
    inReduxProvider?: boolean;
    type: SlotType;
}


// WITH_WIFI: Figure out how to set import.meta field in the next.config file to allow the TemplateSlotData to be defined as a regular typescript export in each file where it's applicable, yet not be compiled during the build process in the same way that vitest avoids that. Then wrap the export in something like:

// const handleSlotExport = (data: TemplateSlotData): TemplateSlotData | undefined => {
//        return import.meta.ULLD_GATHERING_SLOT_DATA ? data : undefined
//     }
// export const slotData = handleSlotExport({...mySlotData})
