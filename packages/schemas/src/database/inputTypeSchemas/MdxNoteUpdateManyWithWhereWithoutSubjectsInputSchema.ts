import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteScalarWhereInputSchema } from '../MdxNoteScalarWhereInputSchema.js';
import { MdxNoteUpdateManyMutationInputSchema } from '../MdxNoteUpdateManyMutationInputSchema.js';
import { MdxNoteUncheckedUpdateManyWithoutSubjectsInputSchema } from '../MdxNoteUncheckedUpdateManyWithoutSubjectsInputSchema.js';
export const MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema: z.ZodType<Prisma.MdxNoteUpdateManyWithWhereWithoutSubjectsInput> = z.object({
  where: z.lazy(() => MdxNoteScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MdxNoteUpdateManyMutationInputSchema),z.lazy(() => MdxNoteUncheckedUpdateManyWithoutSubjectsInputSchema) ]),
}).strict();
export default MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema;