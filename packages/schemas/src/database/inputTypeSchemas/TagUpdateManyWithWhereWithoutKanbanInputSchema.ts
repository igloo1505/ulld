import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema';
import { TagUpdateManyMutationInputSchema } from './TagUpdateManyMutationInputSchema';
import { TagUncheckedUpdateManyWithoutKanbanInputSchema } from './TagUncheckedUpdateManyWithoutKanbanInputSchema';

export const TagUpdateManyWithWhereWithoutKanbanInputSchema: z.ZodType<Prisma.TagUpdateManyWithWhereWithoutKanbanInput> = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagUpdateManyMutationInputSchema),z.lazy(() => TagUncheckedUpdateManyWithoutKanbanInputSchema) ]),
}).strict();

export default TagUpdateManyWithWhereWithoutKanbanInputSchema;
