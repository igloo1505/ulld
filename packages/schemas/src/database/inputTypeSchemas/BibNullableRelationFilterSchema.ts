import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibWhereInputSchema } from '../BibWhereInputSchema.js';
export const BibNullableRelationFilterSchema: z.ZodType<Prisma.BibNullableRelationFilter> = z.object({
  is: z.lazy(() => BibWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => BibWhereInputSchema).optional().nullable()
}).strict();
export default BibNullableRelationFilterSchema;