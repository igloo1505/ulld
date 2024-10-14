import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoScalarWhereInputSchema } from './ToDoScalarWhereInputSchema';
import { ToDoUpdateManyMutationInputSchema } from './ToDoUpdateManyMutationInputSchema';
import { ToDoUncheckedUpdateManyWithoutTagsInputSchema } from './ToDoUncheckedUpdateManyWithoutTagsInputSchema';

export const ToDoUpdateManyWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.ToDoUpdateManyWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => ToDoScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ToDoUpdateManyMutationInputSchema),z.lazy(() => ToDoUncheckedUpdateManyWithoutTagsInputSchema) ]),
}).strict();

export default ToDoUpdateManyWithWhereWithoutTagsInputSchema;
