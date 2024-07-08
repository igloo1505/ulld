import { SlotMap as SM } from "./slotMapRootType";

export type SlotMap = SM

export type PluginSlotKey = keyof SM

export type EquationsSubSlots = keyof SM["equations"]

export type EditorSubSlots = keyof SM["editor"]

export type BibliographySubSlots = keyof SM["bibliography"]

export type UISubSlots = keyof SM["UI"]

export type Task-managerSubSlots = keyof SM["task-manager"]

export type NavigationSubSlots = keyof SM["navigation"]

export type CommandPaletteSubSlots = keyof SM["commandPalette"]