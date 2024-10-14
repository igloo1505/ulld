import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoListWhereUniqueInputSchema } from './ToDoListWhereUniqueInputSchema';
import { ToDoListUpdateWithoutTagsInputSchema } from './ToDoListUpdateWithoutTagsInputSchema';
import { ToDoListUncheckedUpdateWithoutTagsInputSchema } from './ToDoListUncheckedUpdateWithoutTagsInputSchema';
import { ToDoListCreateWithoutTagsInputSchema } from './ToDoListCreateWithoutTagsInputSchema';
import { ToDoListUncheckedCreateWithoutTagsInputSchema } from './ToDoListUncheckedCreateWithoutTagsInputSchema';

export const ToDoListUpsertWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.ToDoListUpsertWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => ToDoListWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ToDoListUpdateWithoutTagsInputSchema),z.lazy(() => ToDoListUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => ToDoListCreateWithoutTagsInputSchema),z.lazy(() => ToDoListUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default ToDoListUpsertWithWhereUniqueWithoutTagsInputSchema;
