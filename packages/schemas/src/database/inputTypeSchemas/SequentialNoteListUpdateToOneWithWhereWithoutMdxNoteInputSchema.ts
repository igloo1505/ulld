import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SequentialNoteListWhereInputSchema } from '../SequentialNoteListWhereInputSchema.js';
import { SequentialNoteListUpdateWithoutMdxNoteInputSchema } from '../SequentialNoteListUpdateWithoutMdxNoteInputSchema.js';
import { SequentialNoteListUncheckedUpdateWithoutMdxNoteInputSchema } from '../SequentialNoteListUncheckedUpdateWithoutMdxNoteInputSchema.js';
export const SequentialNoteListUpdateToOneWithWhereWithoutMdxNoteInputSchema: z.ZodType<Prisma.SequentialNoteListUpdateToOneWithWhereWithoutMdxNoteInput> = z.object({
  where: z.lazy(() => SequentialNoteListWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SequentialNoteListUpdateWithoutMdxNoteInputSchema),z.lazy(() => SequentialNoteListUncheckedUpdateWithoutMdxNoteInputSchema) ]),
}).strict();
export default SequentialNoteListUpdateToOneWithWhereWithoutMdxNoteInputSchema;