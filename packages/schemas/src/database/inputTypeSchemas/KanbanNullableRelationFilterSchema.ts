import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanbanWhereInputSchema } from './KanbanWhereInputSchema';

export const KanbanNullableRelationFilterSchema: z.ZodType<Prisma.KanbanNullableRelationFilter> = z.object({
  is: z.lazy(() => KanbanWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => KanbanWhereInputSchema).optional().nullable()
}).strict();

export default KanbanNullableRelationFilterSchema;
