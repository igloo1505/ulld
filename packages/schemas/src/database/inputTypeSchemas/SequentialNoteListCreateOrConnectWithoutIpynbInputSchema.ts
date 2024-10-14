import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SequentialNoteListWhereUniqueInputSchema } from './SequentialNoteListWhereUniqueInputSchema';
import { SequentialNoteListCreateWithoutIpynbInputSchema } from './SequentialNoteListCreateWithoutIpynbInputSchema';
import { SequentialNoteListUncheckedCreateWithoutIpynbInputSchema } from './SequentialNoteListUncheckedCreateWithoutIpynbInputSchema';

export const SequentialNoteListCreateOrConnectWithoutIpynbInputSchema: z.ZodType<Prisma.SequentialNoteListCreateOrConnectWithoutIpynbInput> = z.object({
  where: z.lazy(() => SequentialNoteListWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SequentialNoteListCreateWithoutIpynbInputSchema),z.lazy(() => SequentialNoteListUncheckedCreateWithoutIpynbInputSchema) ]),
}).strict();

export default SequentialNoteListCreateOrConnectWithoutIpynbInputSchema;
