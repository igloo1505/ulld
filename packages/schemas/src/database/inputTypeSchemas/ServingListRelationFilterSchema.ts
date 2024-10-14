import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServingWhereInputSchema } from './ServingWhereInputSchema';

export const ServingListRelationFilterSchema: z.ZodType<Prisma.ServingListRelationFilter> = z.object({
  every: z.lazy(() => ServingWhereInputSchema).optional(),
  some: z.lazy(() => ServingWhereInputSchema).optional(),
  none: z.lazy(() => ServingWhereInputSchema).optional()
}).strict();

export default ServingListRelationFilterSchema;
