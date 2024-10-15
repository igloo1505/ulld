import { z } from 'zod';
import { IpynbUncheckedCreateNestedManyWithoutSequentialListInputSchema } from './IpynbUncheckedCreateNestedManyWithoutSequentialListInputSchema.js';
export const SequentialNoteListUncheckedCreateWithoutMdxNoteInputSchema = z.object({
    sequentialKey: z.string(),
    Ipynb: z.lazy(() => IpynbUncheckedCreateNestedManyWithoutSequentialListInputSchema).optional()
}).strict();
export default SequentialNoteListUncheckedCreateWithoutMdxNoteInputSchema;
