import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteScalarWhereInputSchema } from '../MdxNoteScalarWhereInputSchema.js';
import { MdxNoteUpdateManyMutationInputSchema } from '../MdxNoteUpdateManyMutationInputSchema.js';
import { MdxNoteUncheckedUpdateManyWithoutTagsInputSchema } from '../MdxNoteUncheckedUpdateManyWithoutTagsInputSchema.js';
export const MdxNoteUpdateManyWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.MdxNoteUpdateManyWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => MdxNoteScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MdxNoteUpdateManyMutationInputSchema),z.lazy(() => MdxNoteUncheckedUpdateManyWithoutTagsInputSchema) ]),
}).strict();
export default MdxNoteUpdateManyWithWhereWithoutTagsInputSchema;