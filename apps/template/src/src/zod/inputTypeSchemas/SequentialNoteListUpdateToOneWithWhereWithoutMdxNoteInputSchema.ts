import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SequentialNoteListWhereInputSchema } from './SequentialNoteListWhereInputSchema';
import { SequentialNoteListUpdateWithoutMdxNoteInputSchema } from './SequentialNoteListUpdateWithoutMdxNoteInputSchema';
import { SequentialNoteListUncheckedUpdateWithoutMdxNoteInputSchema } from './SequentialNoteListUncheckedUpdateWithoutMdxNoteInputSchema';

export const SequentialNoteListUpdateToOneWithWhereWithoutMdxNoteInputSchema: z.ZodType<Prisma.SequentialNoteListUpdateToOneWithWhereWithoutMdxNoteInput> = z.object({
  where: z.lazy(() => SequentialNoteListWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SequentialNoteListUpdateWithoutMdxNoteInputSchema),z.lazy(() => SequentialNoteListUncheckedUpdateWithoutMdxNoteInputSchema) ]),
}).strict();

export default SequentialNoteListUpdateToOneWithWhereWithoutMdxNoteInputSchema;
