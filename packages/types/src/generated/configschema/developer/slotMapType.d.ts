import { SlotMap as SM } from "./slotMapRootType";
export type PluginSlotKey = keyof SM;
export type SnippetsSubSlots = keyof SM["snippets"];
export type MathSubSlots = keyof SM["math"];
export type EditorSubSlots = keyof SM["editor"];
export type BibliographySubSlots = keyof SM["bibliography"];
export type UISubSlots = keyof SM["UI"];
export type TaskManagerSubSlots = keyof SM["taskManager"];
export type PdfSubSlots = keyof SM["pdf"];
export type NavigationSubSlots = keyof SM["navigation"];
export type DashboardSubSlots = keyof SM["dashboard"];
export type CommandPaletteSubSlots = keyof SM["commandPalette"];
export type AnySubSlotKey = SnippetsSubSlots | MathSubSlots | EditorSubSlots | BibliographySubSlots | UISubSlots | TaskManagerSubSlots | PdfSubSlots | NavigationSubSlots | DashboardSubSlots | CommandPaletteSubSlots;
//# sourceMappingURL=slotMapType.d.ts.map