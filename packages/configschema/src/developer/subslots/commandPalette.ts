import {z} from 'zod'

export const slot = "commandPalette"

export const fields = {
    commandPalette: z.string().nullish().describe("Path to main commandPalette component."),
}

export const commandPaletteSubSlotNames = Object.keys(fields)

export const commandPaletteSubSlots = z.object(fields)
