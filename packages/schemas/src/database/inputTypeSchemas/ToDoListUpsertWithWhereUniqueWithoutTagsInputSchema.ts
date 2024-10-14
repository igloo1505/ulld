import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoListWhereUniqueInputSchema } from './ToDoListWhereUniqueInputSchema.js';
import { ToDoListUpdateWithoutTagsInputSchema } from './ToDoListUpdateWithoutTagsInputSchema.js';
import { ToDoListUncheckedUpdateWithoutTagsInputSchema } from './ToDoListUncheckedUpdateWithoutTagsInputSchema.js';
import { ToDoListCreateWithoutTagsInputSchema } from './ToDoListCreateWithoutTagsInputSchema.js';
import { ToDoListUncheckedCreateWithoutTagsInputSchema } from './ToDoListUncheckedCreateWithoutTagsInputSchema.js';
export const ToDoListUpsertWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.ToDoListUpsertWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => ToDoListWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ToDoListUpdateWithoutTagsInputSchema),z.lazy(() => ToDoListUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => ToDoListCreateWithoutTagsInputSchema),z.lazy(() => ToDoListUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();
export default ToDoListUpsertWithWhereUniqueWithoutTagsInputSchema;