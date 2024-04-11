import { z } from 'zod'


export const bibItemTagParser = z.object({
    bibItemId: z.string(),
    tag: z.string()
})
