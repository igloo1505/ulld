import { z } from 'zod';
import { DefinitionCreateManyMdxNoteInputSchema } from './DefinitionCreateManyMdxNoteInputSchema.js';
export const DefinitionCreateManyMdxNoteInputEnvelopeSchema = z.object({
    data: z.union([z.lazy(() => DefinitionCreateManyMdxNoteInputSchema), z.lazy(() => DefinitionCreateManyMdxNoteInputSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export default DefinitionCreateManyMdxNoteInputEnvelopeSchema;
