import { z } from 'zod';
import { SequentialNoteListWhereInputSchema } from './SequentialNoteListWhereInputSchema.js';
import { SequentialNoteListUpdateWithoutIpynbInputSchema } from './SequentialNoteListUpdateWithoutIpynbInputSchema.js';
import { SequentialNoteListUncheckedUpdateWithoutIpynbInputSchema } from './SequentialNoteListUncheckedUpdateWithoutIpynbInputSchema.js';
export const SequentialNoteListUpdateToOneWithWhereWithoutIpynbInputSchema = z.object({
    where: z.lazy(() => SequentialNoteListWhereInputSchema).optional(),
    data: z.union([z.lazy(() => SequentialNoteListUpdateWithoutIpynbInputSchema), z.lazy(() => SequentialNoteListUncheckedUpdateWithoutIpynbInputSchema)]),
}).strict();
export default SequentialNoteListUpdateToOneWithWhereWithoutIpynbInputSchema;
