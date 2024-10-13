import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from '../ToDoWhereUniqueInputSchema.js';
import { ToDoUpdateWithoutAssociatedNotesInputSchema } from '../ToDoUpdateWithoutAssociatedNotesInputSchema.js';
import { ToDoUncheckedUpdateWithoutAssociatedNotesInputSchema } from '../ToDoUncheckedUpdateWithoutAssociatedNotesInputSchema.js';
import { ToDoCreateWithoutAssociatedNotesInputSchema } from '../ToDoCreateWithoutAssociatedNotesInputSchema.js';
import { ToDoUncheckedCreateWithoutAssociatedNotesInputSchema } from '../ToDoUncheckedCreateWithoutAssociatedNotesInputSchema.js';
export const ToDoUpsertWithWhereUniqueWithoutAssociatedNotesInputSchema: z.ZodType<Prisma.ToDoUpsertWithWhereUniqueWithoutAssociatedNotesInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ToDoUpdateWithoutAssociatedNotesInputSchema),z.lazy(() => ToDoUncheckedUpdateWithoutAssociatedNotesInputSchema) ]),
  create: z.union([ z.lazy(() => ToDoCreateWithoutAssociatedNotesInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutAssociatedNotesInputSchema) ]),
}).strict();
export default ToDoUpsertWithWhereUniqueWithoutAssociatedNotesInputSchema;