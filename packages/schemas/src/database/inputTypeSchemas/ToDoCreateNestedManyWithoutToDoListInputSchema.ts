import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoCreateWithoutToDoListInputSchema } from './ToDoCreateWithoutToDoListInputSchema.js';
import { ToDoUncheckedCreateWithoutToDoListInputSchema } from './ToDoUncheckedCreateWithoutToDoListInputSchema.js';
import { ToDoCreateOrConnectWithoutToDoListInputSchema } from './ToDoCreateOrConnectWithoutToDoListInputSchema.js';
import { ToDoCreateManyToDoListInputEnvelopeSchema } from './ToDoCreateManyToDoListInputEnvelopeSchema.js';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema.js';
export const ToDoCreateNestedManyWithoutToDoListInputSchema: z.ZodType<Prisma.ToDoCreateNestedManyWithoutToDoListInput> = z.object({
  create: z.union([ z.lazy(() => ToDoCreateWithoutToDoListInputSchema),z.lazy(() => ToDoCreateWithoutToDoListInputSchema).array(),z.lazy(() => ToDoUncheckedCreateWithoutToDoListInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutToDoListInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ToDoCreateOrConnectWithoutToDoListInputSchema),z.lazy(() => ToDoCreateOrConnectWithoutToDoListInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ToDoCreateManyToDoListInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ToDoWhereUniqueInputSchema),z.lazy(() => ToDoWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default ToDoCreateNestedManyWithoutToDoListInputSchema;