import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteScalarWhereInputSchema } from './MdxNoteScalarWhereInputSchema.js';
import { MdxNoteUpdateManyMutationInputSchema } from './MdxNoteUpdateManyMutationInputSchema.js';
import { MdxNoteUncheckedUpdateManyWithoutEquationsInputSchema } from './MdxNoteUncheckedUpdateManyWithoutEquationsInputSchema.js';
export const MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema: z.ZodType<Prisma.MdxNoteUpdateManyWithWhereWithoutEquationsInput> = z.object({
  where: z.lazy(() => MdxNoteScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MdxNoteUpdateManyMutationInputSchema),z.lazy(() => MdxNoteUncheckedUpdateManyWithoutEquationsInputSchema) ]),
}).strict();
export default MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema;