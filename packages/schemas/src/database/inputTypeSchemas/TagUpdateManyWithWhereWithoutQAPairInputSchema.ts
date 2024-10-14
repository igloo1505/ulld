import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema.js';
import { TagUpdateManyMutationInputSchema } from './TagUpdateManyMutationInputSchema.js';
import { TagUncheckedUpdateManyWithoutQAPairInputSchema } from './TagUncheckedUpdateManyWithoutQAPairInputSchema.js';
export const TagUpdateManyWithWhereWithoutQAPairInputSchema: z.ZodType<Prisma.TagUpdateManyWithWhereWithoutQAPairInput> = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagUpdateManyMutationInputSchema),z.lazy(() => TagUncheckedUpdateManyWithoutQAPairInputSchema) ]),
}).strict();
export default TagUpdateManyWithWhereWithoutQAPairInputSchema;