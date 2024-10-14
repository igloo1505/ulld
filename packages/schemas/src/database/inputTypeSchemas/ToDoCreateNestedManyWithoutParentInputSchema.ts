import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoCreateWithoutParentInputSchema } from './ToDoCreateWithoutParentInputSchema';
import { ToDoUncheckedCreateWithoutParentInputSchema } from './ToDoUncheckedCreateWithoutParentInputSchema';
import { ToDoCreateOrConnectWithoutParentInputSchema } from './ToDoCreateOrConnectWithoutParentInputSchema';
import { ToDoCreateManyParentInputEnvelopeSchema } from './ToDoCreateManyParentInputEnvelopeSchema';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema';

export const ToDoCreateNestedManyWithoutParentInputSchema: z.ZodType<Prisma.ToDoCreateNestedManyWithoutParentInput> = z.object({
  create: z.union([ z.lazy(() => ToDoCreateWithoutParentInputSchema),z.lazy(() => ToDoCreateWithoutParentInputSchema).array(),z.lazy(() => ToDoUncheckedCreateWithoutParentInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutParentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ToDoCreateOrConnectWithoutParentInputSchema),z.lazy(() => ToDoCreateOrConnectWithoutParentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ToDoCreateManyParentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ToDoWhereUniqueInputSchema),z.lazy(() => ToDoWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ToDoCreateNestedManyWithoutParentInputSchema;
