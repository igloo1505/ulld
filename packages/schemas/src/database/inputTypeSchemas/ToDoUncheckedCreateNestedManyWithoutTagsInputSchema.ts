import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoCreateWithoutTagsInputSchema } from './ToDoCreateWithoutTagsInputSchema.js';
import { ToDoUncheckedCreateWithoutTagsInputSchema } from './ToDoUncheckedCreateWithoutTagsInputSchema.js';
import { ToDoCreateOrConnectWithoutTagsInputSchema } from './ToDoCreateOrConnectWithoutTagsInputSchema.js';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema.js';
export const ToDoUncheckedCreateNestedManyWithoutTagsInputSchema: z.ZodType<Prisma.ToDoUncheckedCreateNestedManyWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => ToDoCreateWithoutTagsInputSchema),z.lazy(() => ToDoCreateWithoutTagsInputSchema).array(),z.lazy(() => ToDoUncheckedCreateWithoutTagsInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ToDoCreateOrConnectWithoutTagsInputSchema),z.lazy(() => ToDoCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ToDoWhereUniqueInputSchema),z.lazy(() => ToDoWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default ToDoUncheckedCreateNestedManyWithoutTagsInputSchema;