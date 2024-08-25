import {z} from 'zod'
import { navigationLinkCategory } from './navigationLinkType.js'


export const navigationLinkSchema = z.object({
    label: z.string(),
    href: z.string(),
    icon: z.string().optional(),
    pluginName: z.string().optional(),
    category: navigationLinkCategory.default("general")
})
