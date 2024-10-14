import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithoutTodoListInputSchema } from './TagUpdateWithoutTodoListInputSchema';
import { TagUncheckedUpdateWithoutTodoListInputSchema } from './TagUncheckedUpdateWithoutTodoListInputSchema';
import { TagCreateWithoutTodoListInputSchema } from './TagCreateWithoutTodoListInputSchema';
import { TagUncheckedCreateWithoutTodoListInputSchema } from './TagUncheckedCreateWithoutTodoListInputSchema';

export const TagUpsertWithWhereUniqueWithoutTodoListInputSchema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutTodoListInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagUpdateWithoutTodoListInputSchema),z.lazy(() => TagUncheckedUpdateWithoutTodoListInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutTodoListInputSchema),z.lazy(() => TagUncheckedCreateWithoutTodoListInputSchema) ]),
}).strict();

export default TagUpsertWithWhereUniqueWithoutTodoListInputSchema;
