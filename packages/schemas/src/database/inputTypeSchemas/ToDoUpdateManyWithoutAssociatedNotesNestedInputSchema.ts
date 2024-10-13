import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoCreateWithoutAssociatedNotesInputSchema } from '../ToDoCreateWithoutAssociatedNotesInputSchema.js';
import { ToDoUncheckedCreateWithoutAssociatedNotesInputSchema } from '../ToDoUncheckedCreateWithoutAssociatedNotesInputSchema.js';
import { ToDoCreateOrConnectWithoutAssociatedNotesInputSchema } from '../ToDoCreateOrConnectWithoutAssociatedNotesInputSchema.js';
import { ToDoUpsertWithWhereUniqueWithoutAssociatedNotesInputSchema } from '../ToDoUpsertWithWhereUniqueWithoutAssociatedNotesInputSchema.js';
import { ToDoWhereUniqueInputSchema } from '../ToDoWhereUniqueInputSchema.js';
import { ToDoUpdateWithWhereUniqueWithoutAssociatedNotesInputSchema } from '../ToDoUpdateWithWhereUniqueWithoutAssociatedNotesInputSchema.js';
import { ToDoUpdateManyWithWhereWithoutAssociatedNotesInputSchema } from '../ToDoUpdateManyWithWhereWithoutAssociatedNotesInputSchema.js';
import { ToDoScalarWhereInputSchema } from '../ToDoScalarWhereInputSchema.js';
export const ToDoUpdateManyWithoutAssociatedNotesNestedInputSchema: z.ZodType<Prisma.ToDoUpdateManyWithoutAssociatedNotesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ToDoCreateWithoutAssociatedNotesInputSchema),z.lazy(() => ToDoCreateWithoutAssociatedNotesInputSchema).array(),z.lazy(() => ToDoUncheckedCreateWithoutAssociatedNotesInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutAssociatedNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ToDoCreateOrConnectWithoutAssociatedNotesInputSchema),z.lazy(() => ToDoCreateOrConnectWithoutAssociatedNotesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ToDoUpsertWithWhereUniqueWithoutAssociatedNotesInputSchema),z.lazy(() => ToDoUpsertWithWhereUniqueWithoutAssociatedNotesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ToDoWhereUniqueInputSchema),z.lazy(() => ToDoWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ToDoWhereUniqueInputSchema),z.lazy(() => ToDoWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ToDoWhereUniqueInputSchema),z.lazy(() => ToDoWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ToDoWhereUniqueInputSchema),z.lazy(() => ToDoWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ToDoUpdateWithWhereUniqueWithoutAssociatedNotesInputSchema),z.lazy(() => ToDoUpdateWithWhereUniqueWithoutAssociatedNotesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ToDoUpdateManyWithWhereWithoutAssociatedNotesInputSchema),z.lazy(() => ToDoUpdateManyWithWhereWithoutAssociatedNotesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ToDoScalarWhereInputSchema),z.lazy(() => ToDoScalarWhereInputSchema).array() ]).optional(),
}).strict();
export default ToDoUpdateManyWithoutAssociatedNotesNestedInputSchema;