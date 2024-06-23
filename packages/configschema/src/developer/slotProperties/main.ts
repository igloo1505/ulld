import {z} from 'zod'
import { pluginSlotSchema } from '../slotsSchema'

export const internalSlotPropertiesSchema = z.object({
    parentSlot: pluginSlotSchema.keyof(),
    slot: z.string(),
    clientOnly: z.boolean(),
    inStoreProvider: z.boolean()
})

