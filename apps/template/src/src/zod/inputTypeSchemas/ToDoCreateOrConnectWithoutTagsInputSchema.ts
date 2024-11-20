import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema';
import { ToDoCreateWithoutTagsInputSchema } from './ToDoCreateWithoutTagsInputSchema';
import { ToDoUncheckedCreateWithoutTagsInputSchema } from './ToDoUncheckedCreateWithoutTagsInputSchema';

export const ToDoCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.ToDoCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ToDoCreateWithoutTagsInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default ToDoCreateOrConnectWithoutTagsInputSchema;
