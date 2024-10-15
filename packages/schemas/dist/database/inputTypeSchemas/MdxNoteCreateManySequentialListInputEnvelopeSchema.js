import { z } from 'zod';
import { MdxNoteCreateManySequentialListInputSchema } from './MdxNoteCreateManySequentialListInputSchema.js';
export const MdxNoteCreateManySequentialListInputEnvelopeSchema = z.object({
    data: z.union([z.lazy(() => MdxNoteCreateManySequentialListInputSchema), z.lazy(() => MdxNoteCreateManySequentialListInputSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export default MdxNoteCreateManySequentialListInputEnvelopeSchema;
