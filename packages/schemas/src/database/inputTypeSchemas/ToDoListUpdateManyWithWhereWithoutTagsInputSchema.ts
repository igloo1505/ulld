import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoListScalarWhereInputSchema } from './ToDoListScalarWhereInputSchema';
import { ToDoListUpdateManyMutationInputSchema } from './ToDoListUpdateManyMutationInputSchema';
import { ToDoListUncheckedUpdateManyWithoutTagsInputSchema } from './ToDoListUncheckedUpdateManyWithoutTagsInputSchema';

export const ToDoListUpdateManyWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.ToDoListUpdateManyWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => ToDoListScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ToDoListUpdateManyMutationInputSchema),z.lazy(() => ToDoListUncheckedUpdateManyWithoutTagsInputSchema) ]),
}).strict();

export default ToDoListUpdateManyWithWhereWithoutTagsInputSchema;
