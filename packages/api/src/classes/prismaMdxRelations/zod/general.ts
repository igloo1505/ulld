import { currentParsableExtensions } from '@ulld/configschema'
import { z } from 'zod'


export const zodFileExtensionInput = currentParsableExtensions

export type ParsableExtension = z.input<typeof zodFileExtensionInput>


export const taggableZodObject = z.object({
    value: z.string(),
    id: z.number().int().optional()
})
