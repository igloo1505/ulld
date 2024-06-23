import {z} from 'zod'

export const slot = "UI"

export const fields = {
    landingPage: z.string().nullish().describe("Path to navbar component."),
    confirmationModal: z.string().nullish().describe("Path to confirmation modal component.")
}


export const UISubSlotNames = Object.keys(fields)

export const uiSubSlots = z.object(fields)
