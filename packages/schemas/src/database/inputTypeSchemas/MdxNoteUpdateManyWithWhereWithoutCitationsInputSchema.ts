import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteScalarWhereInputSchema } from '../MdxNoteScalarWhereInputSchema.js';
import { MdxNoteUpdateManyMutationInputSchema } from '../MdxNoteUpdateManyMutationInputSchema.js';
import { MdxNoteUncheckedUpdateManyWithoutCitationsInputSchema } from '../MdxNoteUncheckedUpdateManyWithoutCitationsInputSchema.js';
export const MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema: z.ZodType<Prisma.MdxNoteUpdateManyWithWhereWithoutCitationsInput> = z.object({
  where: z.lazy(() => MdxNoteScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MdxNoteUpdateManyMutationInputSchema),z.lazy(() => MdxNoteUncheckedUpdateManyWithoutCitationsInputSchema) ]),
}).strict();
export default MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema;