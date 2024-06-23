import {z} from 'zod'

export const slot = "navigation"

export const fields = {
    navbar: z.string().nullish().describe("Path to navbar component."),
    secondary: z.string().nullish().describe("Path to secondary navigation like a sidebar component."),
    footer: z.string().nullish().describe("Path to footer component")
}


export const navigationSubSlotNames = Object.keys(fields)

export const navigationSubSlots = z.object(fields)
