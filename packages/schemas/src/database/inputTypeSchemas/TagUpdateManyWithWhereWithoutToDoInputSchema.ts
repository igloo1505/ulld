import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TagScalarWhereInputSchema } from '../TagScalarWhereInputSchema.js';
import { TagUpdateManyMutationInputSchema } from '../TagUpdateManyMutationInputSchema.js';
import { TagUncheckedUpdateManyWithoutToDoInputSchema } from '../TagUncheckedUpdateManyWithoutToDoInputSchema.js';
export const TagUpdateManyWithWhereWithoutToDoInputSchema: z.ZodType<Prisma.TagUpdateManyWithWhereWithoutToDoInput> = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagUpdateManyMutationInputSchema),z.lazy(() => TagUncheckedUpdateManyWithoutToDoInputSchema) ]),
}).strict();
export default TagUpdateManyWithWhereWithoutToDoInputSchema;