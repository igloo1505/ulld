import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanbanUpdateWithoutTagsInputSchema } from '../KanbanUpdateWithoutTagsInputSchema.js';
import { KanbanUncheckedUpdateWithoutTagsInputSchema } from '../KanbanUncheckedUpdateWithoutTagsInputSchema.js';
import { KanbanCreateWithoutTagsInputSchema } from '../KanbanCreateWithoutTagsInputSchema.js';
import { KanbanUncheckedCreateWithoutTagsInputSchema } from '../KanbanUncheckedCreateWithoutTagsInputSchema.js';
import { KanbanWhereInputSchema } from '../KanbanWhereInputSchema.js';
export const KanbanUpsertWithoutTagsInputSchema: z.ZodType<Prisma.KanbanUpsertWithoutTagsInput> = z.object({
  update: z.union([ z.lazy(() => KanbanUpdateWithoutTagsInputSchema),z.lazy(() => KanbanUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => KanbanCreateWithoutTagsInputSchema),z.lazy(() => KanbanUncheckedCreateWithoutTagsInputSchema) ]),
  where: z.lazy(() => KanbanWhereInputSchema).optional()
}).strict();
export default KanbanUpsertWithoutTagsInputSchema;