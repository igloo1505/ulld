import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanbanWhereInputSchema } from './KanbanWhereInputSchema';
import { KanbanUpdateWithoutTagsInputSchema } from './KanbanUpdateWithoutTagsInputSchema';
import { KanbanUncheckedUpdateWithoutTagsInputSchema } from './KanbanUncheckedUpdateWithoutTagsInputSchema';

export const KanbanUpdateToOneWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.KanbanUpdateToOneWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => KanbanWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => KanbanUpdateWithoutTagsInputSchema),z.lazy(() => KanbanUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();

export default KanbanUpdateToOneWithWhereWithoutTagsInputSchema;
