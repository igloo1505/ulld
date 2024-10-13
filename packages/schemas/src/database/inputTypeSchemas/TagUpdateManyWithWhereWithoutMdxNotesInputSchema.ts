import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TagScalarWhereInputSchema } from '../TagScalarWhereInputSchema.js';
import { TagUpdateManyMutationInputSchema } from '../TagUpdateManyMutationInputSchema.js';
import { TagUncheckedUpdateManyWithoutMdxNotesInputSchema } from '../TagUncheckedUpdateManyWithoutMdxNotesInputSchema.js';
export const TagUpdateManyWithWhereWithoutMdxNotesInputSchema: z.ZodType<Prisma.TagUpdateManyWithWhereWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagUpdateManyMutationInputSchema),z.lazy(() => TagUncheckedUpdateManyWithoutMdxNotesInputSchema) ]),
}).strict();
export default TagUpdateManyWithWhereWithoutMdxNotesInputSchema;