import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoListCreateWithoutTagsInputSchema } from './ToDoListCreateWithoutTagsInputSchema';
import { ToDoListUncheckedCreateWithoutTagsInputSchema } from './ToDoListUncheckedCreateWithoutTagsInputSchema';
import { ToDoListCreateOrConnectWithoutTagsInputSchema } from './ToDoListCreateOrConnectWithoutTagsInputSchema';
import { ToDoListWhereUniqueInputSchema } from './ToDoListWhereUniqueInputSchema';

export const ToDoListUncheckedCreateNestedManyWithoutTagsInputSchema: z.ZodType<Prisma.ToDoListUncheckedCreateNestedManyWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => ToDoListCreateWithoutTagsInputSchema),z.lazy(() => ToDoListCreateWithoutTagsInputSchema).array(),z.lazy(() => ToDoListUncheckedCreateWithoutTagsInputSchema),z.lazy(() => ToDoListUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ToDoListCreateOrConnectWithoutTagsInputSchema),z.lazy(() => ToDoListCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ToDoListWhereUniqueInputSchema),z.lazy(() => ToDoListWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ToDoListUncheckedCreateNestedManyWithoutTagsInputSchema;
