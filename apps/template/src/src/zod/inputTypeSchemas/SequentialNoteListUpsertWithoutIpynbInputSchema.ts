import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SequentialNoteListUpdateWithoutIpynbInputSchema } from './SequentialNoteListUpdateWithoutIpynbInputSchema';
import { SequentialNoteListUncheckedUpdateWithoutIpynbInputSchema } from './SequentialNoteListUncheckedUpdateWithoutIpynbInputSchema';
import { SequentialNoteListCreateWithoutIpynbInputSchema } from './SequentialNoteListCreateWithoutIpynbInputSchema';
import { SequentialNoteListUncheckedCreateWithoutIpynbInputSchema } from './SequentialNoteListUncheckedCreateWithoutIpynbInputSchema';
import { SequentialNoteListWhereInputSchema } from './SequentialNoteListWhereInputSchema';

export const SequentialNoteListUpsertWithoutIpynbInputSchema: z.ZodType<Prisma.SequentialNoteListUpsertWithoutIpynbInput> = z.object({
  update: z.union([ z.lazy(() => SequentialNoteListUpdateWithoutIpynbInputSchema),z.lazy(() => SequentialNoteListUncheckedUpdateWithoutIpynbInputSchema) ]),
  create: z.union([ z.lazy(() => SequentialNoteListCreateWithoutIpynbInputSchema),z.lazy(() => SequentialNoteListUncheckedCreateWithoutIpynbInputSchema) ]),
  where: z.lazy(() => SequentialNoteListWhereInputSchema).optional()
}).strict();

export default SequentialNoteListUpsertWithoutIpynbInputSchema;
