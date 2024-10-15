import { z } from 'zod';
import { SequentialNoteListUpdateWithoutIpynbInputSchema } from './SequentialNoteListUpdateWithoutIpynbInputSchema.js';
import { SequentialNoteListUncheckedUpdateWithoutIpynbInputSchema } from './SequentialNoteListUncheckedUpdateWithoutIpynbInputSchema.js';
import { SequentialNoteListCreateWithoutIpynbInputSchema } from './SequentialNoteListCreateWithoutIpynbInputSchema.js';
import { SequentialNoteListUncheckedCreateWithoutIpynbInputSchema } from './SequentialNoteListUncheckedCreateWithoutIpynbInputSchema.js';
import { SequentialNoteListWhereInputSchema } from './SequentialNoteListWhereInputSchema.js';
export const SequentialNoteListUpsertWithoutIpynbInputSchema = z.object({
    update: z.union([z.lazy(() => SequentialNoteListUpdateWithoutIpynbInputSchema), z.lazy(() => SequentialNoteListUncheckedUpdateWithoutIpynbInputSchema)]),
    create: z.union([z.lazy(() => SequentialNoteListCreateWithoutIpynbInputSchema), z.lazy(() => SequentialNoteListUncheckedCreateWithoutIpynbInputSchema)]),
    where: z.lazy(() => SequentialNoteListWhereInputSchema).optional()
}).strict();
export default SequentialNoteListUpsertWithoutIpynbInputSchema;
