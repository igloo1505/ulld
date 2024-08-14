import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutKanbanInputSchema } from './TagCreateWithoutKanbanInputSchema';
import { TagUncheckedCreateWithoutKanbanInputSchema } from './TagUncheckedCreateWithoutKanbanInputSchema';

export const TagCreateOrConnectWithoutKanbanInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutKanbanInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutKanbanInputSchema),z.lazy(() => TagUncheckedCreateWithoutKanbanInputSchema) ]),
}).strict();

export default TagCreateOrConnectWithoutKanbanInputSchema;
