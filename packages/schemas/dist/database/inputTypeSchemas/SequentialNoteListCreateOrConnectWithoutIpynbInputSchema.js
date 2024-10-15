import { z } from 'zod';
import { SequentialNoteListWhereUniqueInputSchema } from './SequentialNoteListWhereUniqueInputSchema.js';
import { SequentialNoteListCreateWithoutIpynbInputSchema } from './SequentialNoteListCreateWithoutIpynbInputSchema.js';
import { SequentialNoteListUncheckedCreateWithoutIpynbInputSchema } from './SequentialNoteListUncheckedCreateWithoutIpynbInputSchema.js';
export const SequentialNoteListCreateOrConnectWithoutIpynbInputSchema = z.object({
    where: z.lazy(() => SequentialNoteListWhereUniqueInputSchema),
    create: z.union([z.lazy(() => SequentialNoteListCreateWithoutIpynbInputSchema), z.lazy(() => SequentialNoteListUncheckedCreateWithoutIpynbInputSchema)]),
}).strict();
export default SequentialNoteListCreateOrConnectWithoutIpynbInputSchema;
