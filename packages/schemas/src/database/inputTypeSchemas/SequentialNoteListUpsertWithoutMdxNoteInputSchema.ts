import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SequentialNoteListUpdateWithoutMdxNoteInputSchema } from './SequentialNoteListUpdateWithoutMdxNoteInputSchema';
import { SequentialNoteListUncheckedUpdateWithoutMdxNoteInputSchema } from './SequentialNoteListUncheckedUpdateWithoutMdxNoteInputSchema';
import { SequentialNoteListCreateWithoutMdxNoteInputSchema } from './SequentialNoteListCreateWithoutMdxNoteInputSchema';
import { SequentialNoteListUncheckedCreateWithoutMdxNoteInputSchema } from './SequentialNoteListUncheckedCreateWithoutMdxNoteInputSchema';
import { SequentialNoteListWhereInputSchema } from './SequentialNoteListWhereInputSchema';

export const SequentialNoteListUpsertWithoutMdxNoteInputSchema: z.ZodType<Prisma.SequentialNoteListUpsertWithoutMdxNoteInput> = z.object({
  update: z.union([ z.lazy(() => SequentialNoteListUpdateWithoutMdxNoteInputSchema),z.lazy(() => SequentialNoteListUncheckedUpdateWithoutMdxNoteInputSchema) ]),
  create: z.union([ z.lazy(() => SequentialNoteListCreateWithoutMdxNoteInputSchema),z.lazy(() => SequentialNoteListUncheckedCreateWithoutMdxNoteInputSchema) ]),
  where: z.lazy(() => SequentialNoteListWhereInputSchema).optional()
}).strict();

export default SequentialNoteListUpsertWithoutMdxNoteInputSchema;
