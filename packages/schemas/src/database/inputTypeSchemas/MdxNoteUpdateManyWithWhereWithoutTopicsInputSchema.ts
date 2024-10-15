import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteScalarWhereInputSchema } from './MdxNoteScalarWhereInputSchema.js';
import { MdxNoteUpdateManyMutationInputSchema } from './MdxNoteUpdateManyMutationInputSchema.js';
import { MdxNoteUncheckedUpdateManyWithoutTopicsInputSchema } from './MdxNoteUncheckedUpdateManyWithoutTopicsInputSchema.js';
export const MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema: z.ZodType<Prisma.MdxNoteUpdateManyWithWhereWithoutTopicsInput> = z.object({
  where: z.lazy(() => MdxNoteScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MdxNoteUpdateManyMutationInputSchema),z.lazy(() => MdxNoteUncheckedUpdateManyWithoutTopicsInputSchema) ]),
}).strict();
export default MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema;