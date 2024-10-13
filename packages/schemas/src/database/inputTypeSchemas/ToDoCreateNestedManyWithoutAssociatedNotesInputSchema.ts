import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoCreateWithoutAssociatedNotesInputSchema } from '../ToDoCreateWithoutAssociatedNotesInputSchema.js';
import { ToDoUncheckedCreateWithoutAssociatedNotesInputSchema } from '../ToDoUncheckedCreateWithoutAssociatedNotesInputSchema.js';
import { ToDoCreateOrConnectWithoutAssociatedNotesInputSchema } from '../ToDoCreateOrConnectWithoutAssociatedNotesInputSchema.js';
import { ToDoWhereUniqueInputSchema } from '../ToDoWhereUniqueInputSchema.js';
export const ToDoCreateNestedManyWithoutAssociatedNotesInputSchema: z.ZodType<Prisma.ToDoCreateNestedManyWithoutAssociatedNotesInput> = z.object({
  create: z.union([ z.lazy(() => ToDoCreateWithoutAssociatedNotesInputSchema),z.lazy(() => ToDoCreateWithoutAssociatedNotesInputSchema).array(),z.lazy(() => ToDoUncheckedCreateWithoutAssociatedNotesInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutAssociatedNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ToDoCreateOrConnectWithoutAssociatedNotesInputSchema),z.lazy(() => ToDoCreateOrConnectWithoutAssociatedNotesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ToDoWhereUniqueInputSchema),z.lazy(() => ToDoWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default ToDoCreateNestedManyWithoutAssociatedNotesInputSchema;