import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoCreateWithoutChildInputSchema } from './ToDoCreateWithoutChildInputSchema';
import { ToDoUncheckedCreateWithoutChildInputSchema } from './ToDoUncheckedCreateWithoutChildInputSchema';
import { ToDoCreateOrConnectWithoutChildInputSchema } from './ToDoCreateOrConnectWithoutChildInputSchema';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema';

export const ToDoCreateNestedOneWithoutChildInputSchema: z.ZodType<Prisma.ToDoCreateNestedOneWithoutChildInput> = z.object({
  create: z.union([ z.lazy(() => ToDoCreateWithoutChildInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutChildInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ToDoCreateOrConnectWithoutChildInputSchema).optional(),
  connect: z.lazy(() => ToDoWhereUniqueInputSchema).optional()
}).strict();

export default ToDoCreateNestedOneWithoutChildInputSchema;
