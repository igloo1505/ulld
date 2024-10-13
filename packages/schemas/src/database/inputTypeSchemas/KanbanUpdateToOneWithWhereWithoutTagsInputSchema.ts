import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanbanWhereInputSchema } from '../KanbanWhereInputSchema.js';
import { KanbanUpdateWithoutTagsInputSchema } from '../KanbanUpdateWithoutTagsInputSchema.js';
import { KanbanUncheckedUpdateWithoutTagsInputSchema } from '../KanbanUncheckedUpdateWithoutTagsInputSchema.js';
export const KanbanUpdateToOneWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.KanbanUpdateToOneWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => KanbanWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => KanbanUpdateWithoutTagsInputSchema),z.lazy(() => KanbanUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();
export default KanbanUpdateToOneWithWhereWithoutTagsInputSchema;