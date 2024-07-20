import { SlotMap as SM } from "./slotMapRootType";

export type PluginSlotKey = keyof SM

export type SnippetsSubSlots = keyof SM["snippets"]

export type MathSubSlots = keyof SM["math"]

export type EditorSubSlots = keyof SM["editor"]

export type UISubSlots = keyof SM["UI"]

export type BibliographySubSlots = keyof SM["bibliography"]

export type TaskManagerSubSlots = keyof SM["taskManager"]

export type NavigationSubSlots = keyof SM["navigation"]

export type PdfSubSlots = keyof SM["pdf"]

export type DashboardSubSlots = keyof SM["dashboard"]

export type FormSubSlots = keyof SM["form"]

export type CommandPaletteSubSlots = keyof SM["commandPalette"]

export type AnySubSlotKey = SnippetsSubSlots | MathSubSlots | EditorSubSlots | UISubSlots | BibliographySubSlots | TaskManagerSubSlots | NavigationSubSlots | PdfSubSlots | DashboardSubSlots | FormSubSlots | CommandPaletteSubSlots;
