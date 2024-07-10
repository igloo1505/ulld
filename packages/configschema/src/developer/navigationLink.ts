import {z} from 'zod'
import { navigationLinkCategory } from './navigationLinkType'


export const navigationLinkSchema = z.object({
    label: z.string(),
    href: z.string(),
    icon: z.string().optional(),
    category: navigationLinkCategory.default("general")
})
