import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RelatedValuesWhereInputSchema } from './RelatedValuesWhereInputSchema';

export const RelatedValuesListRelationFilterSchema: z.ZodType<Prisma.RelatedValuesListRelationFilter> = z.object({
  every: z.lazy(() => RelatedValuesWhereInputSchema).optional(),
  some: z.lazy(() => RelatedValuesWhereInputSchema).optional(),
  none: z.lazy(() => RelatedValuesWhereInputSchema).optional()
}).strict();

export default RelatedValuesListRelationFilterSchema;
