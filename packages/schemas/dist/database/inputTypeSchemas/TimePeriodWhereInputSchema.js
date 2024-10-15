import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema.js';
import { DateTimeFilterSchema } from './DateTimeFilterSchema.js';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema.js';
import { StringNullableFilterSchema } from './StringNullableFilterSchema.js';
import { DietNullableRelationFilterSchema } from './DietNullableRelationFilterSchema.js';
import { DietWhereInputSchema } from './DietWhereInputSchema.js';
export const TimePeriodWhereInputSchema = z.object({
    AND: z.union([z.lazy(() => TimePeriodWhereInputSchema), z.lazy(() => TimePeriodWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => TimePeriodWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => TimePeriodWhereInputSchema), z.lazy(() => TimePeriodWhereInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    start: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    end: z.union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()]).optional().nullable(),
    dietId: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    Diet: z.union([z.lazy(() => DietNullableRelationFilterSchema), z.lazy(() => DietWhereInputSchema)]).optional().nullable(),
}).strict();
export default TimePeriodWhereInputSchema;
