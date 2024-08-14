import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoScalarWhereInputSchema } from './ToDoScalarWhereInputSchema';
import { ToDoUpdateManyMutationInputSchema } from './ToDoUpdateManyMutationInputSchema';
import { ToDoUncheckedUpdateManyWithoutAssociatedNotesInputSchema } from './ToDoUncheckedUpdateManyWithoutAssociatedNotesInputSchema';

export const ToDoUpdateManyWithWhereWithoutAssociatedNotesInputSchema: z.ZodType<Prisma.ToDoUpdateManyWithWhereWithoutAssociatedNotesInput> = z.object({
  where: z.lazy(() => ToDoScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ToDoUpdateManyMutationInputSchema),z.lazy(() => ToDoUncheckedUpdateManyWithoutAssociatedNotesInputSchema) ]),
}).strict();

export default ToDoUpdateManyWithWhereWithoutAssociatedNotesInputSchema;
