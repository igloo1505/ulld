import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibWhereInputSchema } from './BibWhereInputSchema';

export const BibNullableRelationFilterSchema: z.ZodType<Prisma.BibNullableRelationFilter> = z.object({
  is: z.lazy(() => BibWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => BibWhereInputSchema).optional().nullable()
}).strict();

export default BibNullableRelationFilterSchema;
