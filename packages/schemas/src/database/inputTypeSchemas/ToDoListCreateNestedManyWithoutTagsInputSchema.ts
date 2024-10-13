import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoListCreateWithoutTagsInputSchema } from '../ToDoListCreateWithoutTagsInputSchema.js';
import { ToDoListUncheckedCreateWithoutTagsInputSchema } from '../ToDoListUncheckedCreateWithoutTagsInputSchema.js';
import { ToDoListCreateOrConnectWithoutTagsInputSchema } from '../ToDoListCreateOrConnectWithoutTagsInputSchema.js';
import { ToDoListWhereUniqueInputSchema } from '../ToDoListWhereUniqueInputSchema.js';
export const ToDoListCreateNestedManyWithoutTagsInputSchema: z.ZodType<Prisma.ToDoListCreateNestedManyWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => ToDoListCreateWithoutTagsInputSchema),z.lazy(() => ToDoListCreateWithoutTagsInputSchema).array(),z.lazy(() => ToDoListUncheckedCreateWithoutTagsInputSchema),z.lazy(() => ToDoListUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ToDoListCreateOrConnectWithoutTagsInputSchema),z.lazy(() => ToDoListCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ToDoListWhereUniqueInputSchema),z.lazy(() => ToDoListWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default ToDoListCreateNestedManyWithoutTagsInputSchema;