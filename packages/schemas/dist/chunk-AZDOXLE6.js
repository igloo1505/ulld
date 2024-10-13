import {
  DateTimeNullableFilterSchema
} from "./chunk-GCZZHHO4.js";
import {
  StringNullableFilterSchema
} from "./chunk-2QBRQQJV.js";
import {
  IntFilterSchema
} from "./chunk-YWGZDUEP.js";
import {
  DateTimeFilterSchema
} from "./chunk-JHI3RHA5.js";

// src/database/inputTypeSchemas/TimePeriodScalarWhereInputSchema.ts
import { z } from "zod";
var TimePeriodScalarWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => TimePeriodScalarWhereInputSchema), z.lazy(() => TimePeriodScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => TimePeriodScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => TimePeriodScalarWhereInputSchema), z.lazy(() => TimePeriodScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  start: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  end: z.union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()]).optional().nullable(),
  dietId: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable()
}).strict();
var TimePeriodScalarWhereInputSchema_default = TimePeriodScalarWhereInputSchema;

export {
  TimePeriodScalarWhereInputSchema,
  TimePeriodScalarWhereInputSchema_default
};
//# sourceMappingURL=chunk-AZDOXLE6.js.map