import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SequentialNoteListWhereInputSchema } from './SequentialNoteListWhereInputSchema';
import { SequentialNoteListUpdateWithoutIpynbInputSchema } from './SequentialNoteListUpdateWithoutIpynbInputSchema';
import { SequentialNoteListUncheckedUpdateWithoutIpynbInputSchema } from './SequentialNoteListUncheckedUpdateWithoutIpynbInputSchema';

export const SequentialNoteListUpdateToOneWithWhereWithoutIpynbInputSchema: z.ZodType<Prisma.SequentialNoteListUpdateToOneWithWhereWithoutIpynbInput> = z.object({
  where: z.lazy(() => SequentialNoteListWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SequentialNoteListUpdateWithoutIpynbInputSchema),z.lazy(() => SequentialNoteListUncheckedUpdateWithoutIpynbInputSchema) ]),
}).strict();

export default SequentialNoteListUpdateToOneWithWhereWithoutIpynbInputSchema;
