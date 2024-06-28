
import { z } from 'zod';


export const slotKeySchema = z.union([
    z.literal("UI"),
    z.literal("navigation"),
    z.literal("commandPalette"),
])


export const UISubkeySchema = z.union([
    z.literal("confirmationModal"),
    z.literal("landingPage"),
])


export const navigationSubkeySchema = z.union([
    z.literal("secondary"),
    z.literal("navbar"),
])


export const commandPaletteSubkeySchema = z.union([
    z.literal("commandPalette"),
    z.literal("commandPalettePreview"),
])

