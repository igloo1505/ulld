import { currentParsableExtensions } from '@ulld/configschema/zod/secondaryConfigParse/getParsableExtensions'
import { z } from 'zod'


export const zodFileExtensionInput = currentParsableExtensions

export type ParsableExtension = z.input<typeof zodFileExtensionInput>


export const taggableZodObject = z.object({
    value: z.string(),
    id: z.number().int().optional()
})
