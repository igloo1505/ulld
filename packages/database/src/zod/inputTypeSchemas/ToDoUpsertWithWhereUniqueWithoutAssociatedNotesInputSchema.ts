import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema';
import { ToDoUpdateWithoutAssociatedNotesInputSchema } from './ToDoUpdateWithoutAssociatedNotesInputSchema';
import { ToDoUncheckedUpdateWithoutAssociatedNotesInputSchema } from './ToDoUncheckedUpdateWithoutAssociatedNotesInputSchema';
import { ToDoCreateWithoutAssociatedNotesInputSchema } from './ToDoCreateWithoutAssociatedNotesInputSchema';
import { ToDoUncheckedCreateWithoutAssociatedNotesInputSchema } from './ToDoUncheckedCreateWithoutAssociatedNotesInputSchema';

export const ToDoUpsertWithWhereUniqueWithoutAssociatedNotesInputSchema: z.ZodType<Prisma.ToDoUpsertWithWhereUniqueWithoutAssociatedNotesInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ToDoUpdateWithoutAssociatedNotesInputSchema),z.lazy(() => ToDoUncheckedUpdateWithoutAssociatedNotesInputSchema) ]),
  create: z.union([ z.lazy(() => ToDoCreateWithoutAssociatedNotesInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutAssociatedNotesInputSchema) ]),
}).strict();

export default ToDoUpsertWithWhereUniqueWithoutAssociatedNotesInputSchema;
