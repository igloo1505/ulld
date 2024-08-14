import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoCreateWithoutSubjectsInputSchema } from './ToDoCreateWithoutSubjectsInputSchema';
import { ToDoUncheckedCreateWithoutSubjectsInputSchema } from './ToDoUncheckedCreateWithoutSubjectsInputSchema';
import { ToDoCreateOrConnectWithoutSubjectsInputSchema } from './ToDoCreateOrConnectWithoutSubjectsInputSchema';
import { ToDoUpsertWithWhereUniqueWithoutSubjectsInputSchema } from './ToDoUpsertWithWhereUniqueWithoutSubjectsInputSchema';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema';
import { ToDoUpdateWithWhereUniqueWithoutSubjectsInputSchema } from './ToDoUpdateWithWhereUniqueWithoutSubjectsInputSchema';
import { ToDoUpdateManyWithWhereWithoutSubjectsInputSchema } from './ToDoUpdateManyWithWhereWithoutSubjectsInputSchema';
import { ToDoScalarWhereInputSchema } from './ToDoScalarWhereInputSchema';

export const ToDoUncheckedUpdateManyWithoutSubjectsNestedInputSchema: z.ZodType<Prisma.ToDoUncheckedUpdateManyWithoutSubjectsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ToDoCreateWithoutSubjectsInputSchema),z.lazy(() => ToDoCreateWithoutSubjectsInputSchema).array(),z.lazy(() => ToDoUncheckedCreateWithoutSubjectsInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutSubjectsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ToDoCreateOrConnectWithoutSubjectsInputSchema),z.lazy(() => ToDoCreateOrConnectWithoutSubjectsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ToDoUpsertWithWhereUniqueWithoutSubjectsInputSchema),z.lazy(() => ToDoUpsertWithWhereUniqueWithoutSubjectsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ToDoWhereUniqueInputSchema),z.lazy(() => ToDoWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ToDoWhereUniqueInputSchema),z.lazy(() => ToDoWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ToDoWhereUniqueInputSchema),z.lazy(() => ToDoWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ToDoWhereUniqueInputSchema),z.lazy(() => ToDoWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ToDoUpdateWithWhereUniqueWithoutSubjectsInputSchema),z.lazy(() => ToDoUpdateWithWhereUniqueWithoutSubjectsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ToDoUpdateManyWithWhereWithoutSubjectsInputSchema),z.lazy(() => ToDoUpdateManyWithWhereWithoutSubjectsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ToDoScalarWhereInputSchema),z.lazy(() => ToDoScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ToDoUncheckedUpdateManyWithoutSubjectsNestedInputSchema;
