import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithoutKanbanInputSchema } from './TagUpdateWithoutKanbanInputSchema';
import { TagUncheckedUpdateWithoutKanbanInputSchema } from './TagUncheckedUpdateWithoutKanbanInputSchema';

export const TagUpdateWithWhereUniqueWithoutKanbanInputSchema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutKanbanInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagUpdateWithoutKanbanInputSchema),z.lazy(() => TagUncheckedUpdateWithoutKanbanInputSchema) ]),
}).strict();

export default TagUpdateWithWhereUniqueWithoutKanbanInputSchema;
