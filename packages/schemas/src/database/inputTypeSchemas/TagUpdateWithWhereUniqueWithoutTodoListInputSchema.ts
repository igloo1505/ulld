import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithoutTodoListInputSchema } from './TagUpdateWithoutTodoListInputSchema';
import { TagUncheckedUpdateWithoutTodoListInputSchema } from './TagUncheckedUpdateWithoutTodoListInputSchema';

export const TagUpdateWithWhereUniqueWithoutTodoListInputSchema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutTodoListInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagUpdateWithoutTodoListInputSchema),z.lazy(() => TagUncheckedUpdateWithoutTodoListInputSchema) ]),
}).strict();

export default TagUpdateWithWhereUniqueWithoutTodoListInputSchema;
