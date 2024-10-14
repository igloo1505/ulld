import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoCreateWithoutSubjectsInputSchema } from './ToDoCreateWithoutSubjectsInputSchema';
import { ToDoUncheckedCreateWithoutSubjectsInputSchema } from './ToDoUncheckedCreateWithoutSubjectsInputSchema';
import { ToDoCreateOrConnectWithoutSubjectsInputSchema } from './ToDoCreateOrConnectWithoutSubjectsInputSchema';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema';

export const ToDoUncheckedCreateNestedManyWithoutSubjectsInputSchema: z.ZodType<Prisma.ToDoUncheckedCreateNestedManyWithoutSubjectsInput> = z.object({
  create: z.union([ z.lazy(() => ToDoCreateWithoutSubjectsInputSchema),z.lazy(() => ToDoCreateWithoutSubjectsInputSchema).array(),z.lazy(() => ToDoUncheckedCreateWithoutSubjectsInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutSubjectsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ToDoCreateOrConnectWithoutSubjectsInputSchema),z.lazy(() => ToDoCreateOrConnectWithoutSubjectsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ToDoWhereUniqueInputSchema),z.lazy(() => ToDoWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ToDoUncheckedCreateNestedManyWithoutSubjectsInputSchema;
