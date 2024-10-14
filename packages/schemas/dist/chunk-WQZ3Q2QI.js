import {
  DateTimeNullableFilterSchema
} from "./chunk-QHEDWAK6.js";
import {
  StringNullableFilterSchema
} from "./chunk-2AUFJPNJ.js";
import {
  IntFilterSchema
} from "./chunk-EMYNQWE7.js";
import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";

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
//# sourceMappingURL=chunk-WQZ3Q2QI.js.map