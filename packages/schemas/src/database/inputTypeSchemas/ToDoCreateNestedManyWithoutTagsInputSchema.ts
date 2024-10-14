import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoCreateWithoutTagsInputSchema } from './ToDoCreateWithoutTagsInputSchema';
import { ToDoUncheckedCreateWithoutTagsInputSchema } from './ToDoUncheckedCreateWithoutTagsInputSchema';
import { ToDoCreateOrConnectWithoutTagsInputSchema } from './ToDoCreateOrConnectWithoutTagsInputSchema';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema';

export const ToDoCreateNestedManyWithoutTagsInputSchema: z.ZodType<Prisma.ToDoCreateNestedManyWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => ToDoCreateWithoutTagsInputSchema),z.lazy(() => ToDoCreateWithoutTagsInputSchema).array(),z.lazy(() => ToDoUncheckedCreateWithoutTagsInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ToDoCreateOrConnectWithoutTagsInputSchema),z.lazy(() => ToDoCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ToDoWhereUniqueInputSchema),z.lazy(() => ToDoWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ToDoCreateNestedManyWithoutTagsInputSchema;
