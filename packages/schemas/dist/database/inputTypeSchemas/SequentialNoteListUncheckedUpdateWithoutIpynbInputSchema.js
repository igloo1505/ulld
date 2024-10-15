import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { MdxNoteUncheckedUpdateManyWithoutSequentialListNestedInputSchema } from './MdxNoteUncheckedUpdateManyWithoutSequentialListNestedInputSchema.js';
export const SequentialNoteListUncheckedUpdateWithoutIpynbInputSchema = z.object({
    sequentialKey: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    MdxNote: z.lazy(() => MdxNoteUncheckedUpdateManyWithoutSequentialListNestedInputSchema).optional()
}).strict();
export default SequentialNoteListUncheckedUpdateWithoutIpynbInputSchema;
