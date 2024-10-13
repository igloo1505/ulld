import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoListWhereUniqueInputSchema } from '../ToDoListWhereUniqueInputSchema.js';
import { ToDoListCreateWithoutTagsInputSchema } from '../ToDoListCreateWithoutTagsInputSchema.js';
import { ToDoListUncheckedCreateWithoutTagsInputSchema } from '../ToDoListUncheckedCreateWithoutTagsInputSchema.js';
export const ToDoListCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.ToDoListCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => ToDoListWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ToDoListCreateWithoutTagsInputSchema),z.lazy(() => ToDoListUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();
export default ToDoListCreateOrConnectWithoutTagsInputSchema;