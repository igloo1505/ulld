import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
import { TagCreateWithoutKanbanInputSchema } from './TagCreateWithoutKanbanInputSchema.js';
import { TagUncheckedCreateWithoutKanbanInputSchema } from './TagUncheckedCreateWithoutKanbanInputSchema.js';
export const TagCreateOrConnectWithoutKanbanInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutKanbanInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutKanbanInputSchema),z.lazy(() => TagUncheckedCreateWithoutKanbanInputSchema) ]),
}).strict();
export default TagCreateOrConnectWithoutKanbanInputSchema;