import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoCreateWithoutTopicsInputSchema } from './ToDoCreateWithoutTopicsInputSchema';
import { ToDoUncheckedCreateWithoutTopicsInputSchema } from './ToDoUncheckedCreateWithoutTopicsInputSchema';
import { ToDoCreateOrConnectWithoutTopicsInputSchema } from './ToDoCreateOrConnectWithoutTopicsInputSchema';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema';

export const ToDoUncheckedCreateNestedManyWithoutTopicsInputSchema: z.ZodType<Prisma.ToDoUncheckedCreateNestedManyWithoutTopicsInput> = z.object({
  create: z.union([ z.lazy(() => ToDoCreateWithoutTopicsInputSchema),z.lazy(() => ToDoCreateWithoutTopicsInputSchema).array(),z.lazy(() => ToDoUncheckedCreateWithoutTopicsInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutTopicsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ToDoCreateOrConnectWithoutTopicsInputSchema),z.lazy(() => ToDoCreateOrConnectWithoutTopicsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ToDoWhereUniqueInputSchema),z.lazy(() => ToDoWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ToDoUncheckedCreateNestedManyWithoutTopicsInputSchema;
