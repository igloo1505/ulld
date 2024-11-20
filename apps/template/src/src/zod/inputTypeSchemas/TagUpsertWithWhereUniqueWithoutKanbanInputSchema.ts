import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithoutKanbanInputSchema } from './TagUpdateWithoutKanbanInputSchema';
import { TagUncheckedUpdateWithoutKanbanInputSchema } from './TagUncheckedUpdateWithoutKanbanInputSchema';
import { TagCreateWithoutKanbanInputSchema } from './TagCreateWithoutKanbanInputSchema';
import { TagUncheckedCreateWithoutKanbanInputSchema } from './TagUncheckedCreateWithoutKanbanInputSchema';

export const TagUpsertWithWhereUniqueWithoutKanbanInputSchema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutKanbanInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagUpdateWithoutKanbanInputSchema),z.lazy(() => TagUncheckedUpdateWithoutKanbanInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutKanbanInputSchema),z.lazy(() => TagUncheckedCreateWithoutKanbanInputSchema) ]),
}).strict();

export default TagUpsertWithWhereUniqueWithoutKanbanInputSchema;
