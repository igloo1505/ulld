import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoCreateWithoutAssociatedNotesInputSchema } from './ToDoCreateWithoutAssociatedNotesInputSchema';
import { ToDoUncheckedCreateWithoutAssociatedNotesInputSchema } from './ToDoUncheckedCreateWithoutAssociatedNotesInputSchema';
import { ToDoCreateOrConnectWithoutAssociatedNotesInputSchema } from './ToDoCreateOrConnectWithoutAssociatedNotesInputSchema';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema';

export const ToDoUncheckedCreateNestedManyWithoutAssociatedNotesInputSchema: z.ZodType<Prisma.ToDoUncheckedCreateNestedManyWithoutAssociatedNotesInput> = z.object({
  create: z.union([ z.lazy(() => ToDoCreateWithoutAssociatedNotesInputSchema),z.lazy(() => ToDoCreateWithoutAssociatedNotesInputSchema).array(),z.lazy(() => ToDoUncheckedCreateWithoutAssociatedNotesInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutAssociatedNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ToDoCreateOrConnectWithoutAssociatedNotesInputSchema),z.lazy(() => ToDoCreateOrConnectWithoutAssociatedNotesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ToDoWhereUniqueInputSchema),z.lazy(() => ToDoWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ToDoUncheckedCreateNestedManyWithoutAssociatedNotesInputSchema;
