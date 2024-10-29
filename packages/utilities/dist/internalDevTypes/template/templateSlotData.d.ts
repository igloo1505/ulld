import type { SlotDataType } from "../../types/slotDataType";
type SlotPackage = "snippets" | "math" | "editor" | "UI" | "bibliography" | "taskManager" | "pdf" | "navigation" | "dashboard" | "form" | "commandPalette";
type SlotType = "page" | "component" | "modalPage" | "embeddable" | "generatedPage";
export interface TemplateSlotData extends Omit<SlotDataType, "path"> {
    package: SlotPackage;
    slot: Capitalize<string>;
    clientOnly?: boolean;
    inReduxProvider?: boolean;
    type: SlotType;
}
export {};
//# sourceMappingURL=templateSlotData.d.ts.map