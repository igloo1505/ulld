import { SlotMap as SM } from "./slotMapRootType";

export type SlotMap = SM

export type PluginSlotKey = keyof SM

export type UISubSlots = keyof SM["UI"]

export type NavigationSubSlots = keyof SM["navigation"]

export type CommandPaletteSubSlots = keyof SM["commandPalette"]