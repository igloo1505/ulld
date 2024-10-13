import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from '../ToDoWhereUniqueInputSchema.js';
import { ToDoCreateWithoutTagsInputSchema } from '../ToDoCreateWithoutTagsInputSchema.js';
import { ToDoUncheckedCreateWithoutTagsInputSchema } from '../ToDoUncheckedCreateWithoutTagsInputSchema.js';
export const ToDoCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.ToDoCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ToDoCreateWithoutTagsInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();
export default ToDoCreateOrConnectWithoutTagsInputSchema;