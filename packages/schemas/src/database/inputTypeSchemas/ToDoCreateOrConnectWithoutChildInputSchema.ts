import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema';
import { ToDoCreateWithoutChildInputSchema } from './ToDoCreateWithoutChildInputSchema';
import { ToDoUncheckedCreateWithoutChildInputSchema } from './ToDoUncheckedCreateWithoutChildInputSchema';

export const ToDoCreateOrConnectWithoutChildInputSchema: z.ZodType<Prisma.ToDoCreateOrConnectWithoutChildInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ToDoCreateWithoutChildInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutChildInputSchema) ]),
}).strict();

export default ToDoCreateOrConnectWithoutChildInputSchema;
