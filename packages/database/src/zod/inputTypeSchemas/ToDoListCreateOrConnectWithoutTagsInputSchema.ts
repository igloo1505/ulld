import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoListWhereUniqueInputSchema } from './ToDoListWhereUniqueInputSchema';
import { ToDoListCreateWithoutTagsInputSchema } from './ToDoListCreateWithoutTagsInputSchema';
import { ToDoListUncheckedCreateWithoutTagsInputSchema } from './ToDoListUncheckedCreateWithoutTagsInputSchema';

export const ToDoListCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.ToDoListCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => ToDoListWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ToDoListCreateWithoutTagsInputSchema),z.lazy(() => ToDoListUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default ToDoListCreateOrConnectWithoutTagsInputSchema;
