import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietaryItemWhereInputSchema } from './DietaryItemWhereInputSchema';

export const DietaryItemListRelationFilterSchema: z.ZodType<Prisma.DietaryItemListRelationFilter> = z.object({
  every: z.lazy(() => DietaryItemWhereInputSchema).optional(),
  some: z.lazy(() => DietaryItemWhereInputSchema).optional(),
  none: z.lazy(() => DietaryItemWhereInputSchema).optional()
}).strict();

export default DietaryItemListRelationFilterSchema;
