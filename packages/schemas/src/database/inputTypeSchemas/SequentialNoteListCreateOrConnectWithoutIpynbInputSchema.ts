import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SequentialNoteListWhereUniqueInputSchema } from '../SequentialNoteListWhereUniqueInputSchema.js';
import { SequentialNoteListCreateWithoutIpynbInputSchema } from '../SequentialNoteListCreateWithoutIpynbInputSchema.js';
import { SequentialNoteListUncheckedCreateWithoutIpynbInputSchema } from '../SequentialNoteListUncheckedCreateWithoutIpynbInputSchema.js';
export const SequentialNoteListCreateOrConnectWithoutIpynbInputSchema: z.ZodType<Prisma.SequentialNoteListCreateOrConnectWithoutIpynbInput> = z.object({
  where: z.lazy(() => SequentialNoteListWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SequentialNoteListCreateWithoutIpynbInputSchema),z.lazy(() => SequentialNoteListUncheckedCreateWithoutIpynbInputSchema) ]),
}).strict();
export default SequentialNoteListCreateOrConnectWithoutIpynbInputSchema;