import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoCreateWithoutToDoListInputSchema } from './ToDoCreateWithoutToDoListInputSchema';
import { ToDoUncheckedCreateWithoutToDoListInputSchema } from './ToDoUncheckedCreateWithoutToDoListInputSchema';
import { ToDoCreateOrConnectWithoutToDoListInputSchema } from './ToDoCreateOrConnectWithoutToDoListInputSchema';
import { ToDoCreateManyToDoListInputEnvelopeSchema } from './ToDoCreateManyToDoListInputEnvelopeSchema';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema';

export const ToDoUncheckedCreateNestedManyWithoutToDoListInputSchema: z.ZodType<Prisma.ToDoUncheckedCreateNestedManyWithoutToDoListInput> = z.object({
  create: z.union([ z.lazy(() => ToDoCreateWithoutToDoListInputSchema),z.lazy(() => ToDoCreateWithoutToDoListInputSchema).array(),z.lazy(() => ToDoUncheckedCreateWithoutToDoListInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutToDoListInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ToDoCreateOrConnectWithoutToDoListInputSchema),z.lazy(() => ToDoCreateOrConnectWithoutToDoListInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ToDoCreateManyToDoListInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ToDoWhereUniqueInputSchema),z.lazy(() => ToDoWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ToDoUncheckedCreateNestedManyWithoutToDoListInputSchema;
