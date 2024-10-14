import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema';
import { ToDoUpdateWithoutAssociatedNotesInputSchema } from './ToDoUpdateWithoutAssociatedNotesInputSchema';
import { ToDoUncheckedUpdateWithoutAssociatedNotesInputSchema } from './ToDoUncheckedUpdateWithoutAssociatedNotesInputSchema';

export const ToDoUpdateWithWhereUniqueWithoutAssociatedNotesInputSchema: z.ZodType<Prisma.ToDoUpdateWithWhereUniqueWithoutAssociatedNotesInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ToDoUpdateWithoutAssociatedNotesInputSchema),z.lazy(() => ToDoUncheckedUpdateWithoutAssociatedNotesInputSchema) ]),
}).strict();

export default ToDoUpdateWithWhereUniqueWithoutAssociatedNotesInputSchema;
