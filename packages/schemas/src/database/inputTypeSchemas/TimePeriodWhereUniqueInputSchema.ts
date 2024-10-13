import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TimePeriodWhereInputSchema } from '../TimePeriodWhereInputSchema.js';
import { DateTimeFilterSchema } from '../DateTimeFilterSchema.js';
import { DateTimeNullableFilterSchema } from '../DateTimeNullableFilterSchema.js';
import { StringNullableFilterSchema } from '../StringNullableFilterSchema.js';
import { DietNullableRelationFilterSchema } from '../DietNullableRelationFilterSchema.js';
import { DietWhereInputSchema } from '../DietWhereInputSchema.js';
export const TimePeriodWhereUniqueInputSchema: z.ZodType<Prisma.TimePeriodWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => TimePeriodWhereInputSchema),z.lazy(() => TimePeriodWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TimePeriodWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TimePeriodWhereInputSchema),z.lazy(() => TimePeriodWhereInputSchema).array() ]).optional(),
  start: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  end: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  dietId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Diet: z.union([ z.lazy(() => DietNullableRelationFilterSchema),z.lazy(() => DietWhereInputSchema) ]).optional().nullable(),
}).strict());
export default TimePeriodWhereUniqueInputSchema;