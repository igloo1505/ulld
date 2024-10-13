import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteScalarWhereInputSchema } from '../MdxNoteScalarWhereInputSchema.js';
import { MdxNoteUpdateManyMutationInputSchema } from '../MdxNoteUpdateManyMutationInputSchema.js';
import { MdxNoteUncheckedUpdateManyWithoutSequentialListInputSchema } from '../MdxNoteUncheckedUpdateManyWithoutSequentialListInputSchema.js';
export const MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema: z.ZodType<Prisma.MdxNoteUpdateManyWithWhereWithoutSequentialListInput> = z.object({
  where: z.lazy(() => MdxNoteScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MdxNoteUpdateManyMutationInputSchema),z.lazy(() => MdxNoteUncheckedUpdateManyWithoutSequentialListInputSchema) ]),
}).strict();
export default MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema;