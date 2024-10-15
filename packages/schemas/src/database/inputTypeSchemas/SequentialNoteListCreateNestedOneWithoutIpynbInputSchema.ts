import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SequentialNoteListCreateWithoutIpynbInputSchema } from './SequentialNoteListCreateWithoutIpynbInputSchema.js';
import { SequentialNoteListUncheckedCreateWithoutIpynbInputSchema } from './SequentialNoteListUncheckedCreateWithoutIpynbInputSchema.js';
import { SequentialNoteListCreateOrConnectWithoutIpynbInputSchema } from './SequentialNoteListCreateOrConnectWithoutIpynbInputSchema.js';
import { SequentialNoteListWhereUniqueInputSchema } from './SequentialNoteListWhereUniqueInputSchema.js';
export const SequentialNoteListCreateNestedOneWithoutIpynbInputSchema: z.ZodType<Prisma.SequentialNoteListCreateNestedOneWithoutIpynbInput> = z.object({
  create: z.union([ z.lazy(() => SequentialNoteListCreateWithoutIpynbInputSchema),z.lazy(() => SequentialNoteListUncheckedCreateWithoutIpynbInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SequentialNoteListCreateOrConnectWithoutIpynbInputSchema).optional(),
  connect: z.lazy(() => SequentialNoteListWhereUniqueInputSchema).optional()
}).strict();
export default SequentialNoteListCreateNestedOneWithoutIpynbInputSchema;