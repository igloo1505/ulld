import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
import { TagUpdateWithoutTodoListInputSchema } from './TagUpdateWithoutTodoListInputSchema.js';
import { TagUncheckedUpdateWithoutTodoListInputSchema } from './TagUncheckedUpdateWithoutTodoListInputSchema.js';
import { TagCreateWithoutTodoListInputSchema } from './TagCreateWithoutTodoListInputSchema.js';
import { TagUncheckedCreateWithoutTodoListInputSchema } from './TagUncheckedCreateWithoutTodoListInputSchema.js';
export const TagUpsertWithWhereUniqueWithoutTodoListInputSchema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutTodoListInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagUpdateWithoutTodoListInputSchema),z.lazy(() => TagUncheckedUpdateWithoutTodoListInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutTodoListInputSchema),z.lazy(() => TagUncheckedCreateWithoutTodoListInputSchema) ]),
}).strict();
export default TagUpsertWithWhereUniqueWithoutTodoListInputSchema;