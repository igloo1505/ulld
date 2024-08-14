import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanbanUpdateWithoutTagsInputSchema } from './KanbanUpdateWithoutTagsInputSchema';
import { KanbanUncheckedUpdateWithoutTagsInputSchema } from './KanbanUncheckedUpdateWithoutTagsInputSchema';
import { KanbanCreateWithoutTagsInputSchema } from './KanbanCreateWithoutTagsInputSchema';
import { KanbanUncheckedCreateWithoutTagsInputSchema } from './KanbanUncheckedCreateWithoutTagsInputSchema';
import { KanbanWhereInputSchema } from './KanbanWhereInputSchema';

export const KanbanUpsertWithoutTagsInputSchema: z.ZodType<Prisma.KanbanUpsertWithoutTagsInput> = z.object({
  update: z.union([ z.lazy(() => KanbanUpdateWithoutTagsInputSchema),z.lazy(() => KanbanUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => KanbanCreateWithoutTagsInputSchema),z.lazy(() => KanbanUncheckedCreateWithoutTagsInputSchema) ]),
  where: z.lazy(() => KanbanWhereInputSchema).optional()
}).strict();

export default KanbanUpsertWithoutTagsInputSchema;
