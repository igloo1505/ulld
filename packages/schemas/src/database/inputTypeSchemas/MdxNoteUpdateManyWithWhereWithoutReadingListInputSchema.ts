import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteScalarWhereInputSchema } from '../MdxNoteScalarWhereInputSchema.js';
import { MdxNoteUpdateManyMutationInputSchema } from '../MdxNoteUpdateManyMutationInputSchema.js';
import { MdxNoteUncheckedUpdateManyWithoutReadingListInputSchema } from '../MdxNoteUncheckedUpdateManyWithoutReadingListInputSchema.js';
export const MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema: z.ZodType<Prisma.MdxNoteUpdateManyWithWhereWithoutReadingListInput> = z.object({
  where: z.lazy(() => MdxNoteScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MdxNoteUpdateManyMutationInputSchema),z.lazy(() => MdxNoteUncheckedUpdateManyWithoutReadingListInputSchema) ]),
}).strict();
export default MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema;