import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { MdxNoteUpdateManyWithoutSequentialListNestedInputSchema } from './MdxNoteUpdateManyWithoutSequentialListNestedInputSchema.js';
export const SequentialNoteListUpdateWithoutIpynbInputSchema = z.object({
    sequentialKey: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    MdxNote: z.lazy(() => MdxNoteUpdateManyWithoutSequentialListNestedInputSchema).optional()
}).strict();
export default SequentialNoteListUpdateWithoutIpynbInputSchema;
