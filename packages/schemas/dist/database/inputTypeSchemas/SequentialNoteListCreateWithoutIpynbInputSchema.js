import { z } from 'zod';
import { MdxNoteCreateNestedManyWithoutSequentialListInputSchema } from './MdxNoteCreateNestedManyWithoutSequentialListInputSchema.js';
export const SequentialNoteListCreateWithoutIpynbInputSchema = z.object({
    sequentialKey: z.string(),
    MdxNote: z.lazy(() => MdxNoteCreateNestedManyWithoutSequentialListInputSchema).optional()
}).strict();
export default SequentialNoteListCreateWithoutIpynbInputSchema;
