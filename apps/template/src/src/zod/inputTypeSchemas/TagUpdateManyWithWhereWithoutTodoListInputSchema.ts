import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema';
import { TagUpdateManyMutationInputSchema } from './TagUpdateManyMutationInputSchema';
import { TagUncheckedUpdateManyWithoutTodoListInputSchema } from './TagUncheckedUpdateManyWithoutTodoListInputSchema';

export const TagUpdateManyWithWhereWithoutTodoListInputSchema: z.ZodType<Prisma.TagUpdateManyWithWhereWithoutTodoListInput> = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagUpdateManyMutationInputSchema),z.lazy(() => TagUncheckedUpdateManyWithoutTodoListInputSchema) ]),
}).strict();

export default TagUpdateManyWithWhereWithoutTodoListInputSchema;
