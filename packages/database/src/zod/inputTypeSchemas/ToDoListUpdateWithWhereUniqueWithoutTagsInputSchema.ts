import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoListWhereUniqueInputSchema } from './ToDoListWhereUniqueInputSchema';
import { ToDoListUpdateWithoutTagsInputSchema } from './ToDoListUpdateWithoutTagsInputSchema';
import { ToDoListUncheckedUpdateWithoutTagsInputSchema } from './ToDoListUncheckedUpdateWithoutTagsInputSchema';

export const ToDoListUpdateWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.ToDoListUpdateWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => ToDoListWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ToDoListUpdateWithoutTagsInputSchema),z.lazy(() => ToDoListUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();

export default ToDoListUpdateWithWhereUniqueWithoutTagsInputSchema;
