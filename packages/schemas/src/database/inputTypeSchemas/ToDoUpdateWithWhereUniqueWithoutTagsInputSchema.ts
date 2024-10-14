import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema';
import { ToDoUpdateWithoutTagsInputSchema } from './ToDoUpdateWithoutTagsInputSchema';
import { ToDoUncheckedUpdateWithoutTagsInputSchema } from './ToDoUncheckedUpdateWithoutTagsInputSchema';

export const ToDoUpdateWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.ToDoUpdateWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ToDoUpdateWithoutTagsInputSchema),z.lazy(() => ToDoUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();

export default ToDoUpdateWithWhereUniqueWithoutTagsInputSchema;
