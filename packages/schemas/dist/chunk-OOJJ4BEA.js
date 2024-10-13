import {
  DietNullableRelationFilterSchema,
  DietWhereInputSchema,
  TimePeriodWhereInputSchema
} from "./chunk-4FCA5YKO.js";
import {
  DateTimeNullableFilterSchema
} from "./chunk-GCZZHHO4.js";
import {
  StringNullableFilterSchema
} from "./chunk-2QBRQQJV.js";
import {
  DateTimeFilterSchema
} from "./chunk-JHI3RHA5.js";

// src/database/inputTypeSchemas/TimePeriodWhereUniqueInputSchema.ts
import { z } from "zod";
var TimePeriodWhereUniqueInputSchema = z.object({
  id: z.number().int()
}).and(z.object({
  id: z.number().int().optional(),
  AND: z.union([z.lazy(() => TimePeriodWhereInputSchema), z.lazy(() => TimePeriodWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => TimePeriodWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => TimePeriodWhereInputSchema), z.lazy(() => TimePeriodWhereInputSchema).array()]).optional(),
  start: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  end: z.union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()]).optional().nullable(),
  dietId: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  Diet: z.union([z.lazy(() => DietNullableRelationFilterSchema), z.lazy(() => DietWhereInputSchema)]).optional().nullable()
}).strict());
var TimePeriodWhereUniqueInputSchema_default = TimePeriodWhereUniqueInputSchema;

export {
  TimePeriodWhereUniqueInputSchema,
  TimePeriodWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-OOJJ4BEA.js.map