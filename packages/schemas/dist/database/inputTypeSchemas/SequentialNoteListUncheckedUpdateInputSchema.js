import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { MdxNoteUncheckedUpdateManyWithoutSequentialListNestedInputSchema } from './MdxNoteUncheckedUpdateManyWithoutSequentialListNestedInputSchema.js';
import { IpynbUncheckedUpdateManyWithoutSequentialListNestedInputSchema } from './IpynbUncheckedUpdateManyWithoutSequentialListNestedInputSchema.js';
export const SequentialNoteListUncheckedUpdateInputSchema = z.object({
    sequentialKey: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    MdxNote: z.lazy(() => MdxNoteUncheckedUpdateManyWithoutSequentialListNestedInputSchema).optional(),
    Ipynb: z.lazy(() => IpynbUncheckedUpdateManyWithoutSequentialListNestedInputSchema).optional()
}).strict();
export default SequentialNoteListUncheckedUpdateInputSchema;
