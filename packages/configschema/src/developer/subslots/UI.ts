import {z} from 'zod'

export const slot = "ui"

export const fields = {
    landingPage: z.string().nullish().describe("Path to navbar component."),
}


export const UISubSlotNames = Object.keys(fields)

export const uiSubSlots = z.object(fields)
