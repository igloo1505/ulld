import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SequentialNoteListCreateWithoutIpynbInputSchema } from './SequentialNoteListCreateWithoutIpynbInputSchema';
import { SequentialNoteListUncheckedCreateWithoutIpynbInputSchema } from './SequentialNoteListUncheckedCreateWithoutIpynbInputSchema';
import { SequentialNoteListCreateOrConnectWithoutIpynbInputSchema } from './SequentialNoteListCreateOrConnectWithoutIpynbInputSchema';
import { SequentialNoteListWhereUniqueInputSchema } from './SequentialNoteListWhereUniqueInputSchema';

export const SequentialNoteListCreateNestedOneWithoutIpynbInputSchema: z.ZodType<Prisma.SequentialNoteListCreateNestedOneWithoutIpynbInput> = z.object({
  create: z.union([ z.lazy(() => SequentialNoteListCreateWithoutIpynbInputSchema),z.lazy(() => SequentialNoteListUncheckedCreateWithoutIpynbInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SequentialNoteListCreateOrConnectWithoutIpynbInputSchema).optional(),
  connect: z.lazy(() => SequentialNoteListWhereUniqueInputSchema).optional()
}).strict();

export default SequentialNoteListCreateNestedOneWithoutIpynbInputSchema;
