import {z} from 'zod'
import { pluginSlotSchema } from './slots/pluginSlotSchema'


export const ulldPackageJsonConfig = z.object({
    slots: pluginSlotSchema
})
