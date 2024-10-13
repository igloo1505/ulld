import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TagScalarWhereInputSchema } from '../TagScalarWhereInputSchema.js';
import { TagUpdateManyMutationInputSchema } from '../TagUpdateManyMutationInputSchema.js';
import { TagUncheckedUpdateManyWithoutKanbanInputSchema } from '../TagUncheckedUpdateManyWithoutKanbanInputSchema.js';
export const TagUpdateManyWithWhereWithoutKanbanInputSchema: z.ZodType<Prisma.TagUpdateManyWithWhereWithoutKanbanInput> = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagUpdateManyMutationInputSchema),z.lazy(() => TagUncheckedUpdateManyWithoutKanbanInputSchema) ]),
}).strict();
export default TagUpdateManyWithWhereWithoutKanbanInputSchema;