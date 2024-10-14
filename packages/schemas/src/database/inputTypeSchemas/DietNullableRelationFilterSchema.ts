import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietWhereInputSchema } from './DietWhereInputSchema';

export const DietNullableRelationFilterSchema: z.ZodType<Prisma.DietNullableRelationFilter> = z.object({
  is: z.lazy(() => DietWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => DietWhereInputSchema).optional().nullable()
}).strict();

export default DietNullableRelationFilterSchema;
