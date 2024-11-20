import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema';
import { ToDoUpdateWithoutTagsInputSchema } from './ToDoUpdateWithoutTagsInputSchema';
import { ToDoUncheckedUpdateWithoutTagsInputSchema } from './ToDoUncheckedUpdateWithoutTagsInputSchema';
import { ToDoCreateWithoutTagsInputSchema } from './ToDoCreateWithoutTagsInputSchema';
import { ToDoUncheckedCreateWithoutTagsInputSchema } from './ToDoUncheckedCreateWithoutTagsInputSchema';

export const ToDoUpsertWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.ToDoUpsertWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ToDoUpdateWithoutTagsInputSchema),z.lazy(() => ToDoUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => ToDoCreateWithoutTagsInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default ToDoUpsertWithWhereUniqueWithoutTagsInputSchema;
