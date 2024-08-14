import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutTodoListInputSchema } from './TagCreateWithoutTodoListInputSchema';
import { TagUncheckedCreateWithoutTodoListInputSchema } from './TagUncheckedCreateWithoutTodoListInputSchema';
import { TagCreateOrConnectWithoutTodoListInputSchema } from './TagCreateOrConnectWithoutTodoListInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagUncheckedCreateNestedManyWithoutTodoListInputSchema: z.ZodType<Prisma.TagUncheckedCreateNestedManyWithoutTodoListInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutTodoListInputSchema),z.lazy(() => TagCreateWithoutTodoListInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutTodoListInputSchema),z.lazy(() => TagUncheckedCreateWithoutTodoListInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutTodoListInputSchema),z.lazy(() => TagCreateOrConnectWithoutTodoListInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TagUncheckedCreateNestedManyWithoutTodoListInputSchema;
