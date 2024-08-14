import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutTodoListInputSchema } from './TagCreateWithoutTodoListInputSchema';
import { TagUncheckedCreateWithoutTodoListInputSchema } from './TagUncheckedCreateWithoutTodoListInputSchema';

export const TagCreateOrConnectWithoutTodoListInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutTodoListInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutTodoListInputSchema),z.lazy(() => TagUncheckedCreateWithoutTodoListInputSchema) ]),
}).strict();

export default TagCreateOrConnectWithoutTodoListInputSchema;
