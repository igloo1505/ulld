import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoListWhereUniqueInputSchema } from './ToDoListWhereUniqueInputSchema.js';
import { ToDoListUpdateWithoutTagsInputSchema } from './ToDoListUpdateWithoutTagsInputSchema.js';
import { ToDoListUncheckedUpdateWithoutTagsInputSchema } from './ToDoListUncheckedUpdateWithoutTagsInputSchema.js';
export const ToDoListUpdateWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.ToDoListUpdateWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => ToDoListWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ToDoListUpdateWithoutTagsInputSchema),z.lazy(() => ToDoListUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();
export default ToDoListUpdateWithWhereUniqueWithoutTagsInputSchema;