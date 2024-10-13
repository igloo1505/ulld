import {
  DateTimeNullableWithAggregatesFilterSchema
} from "./chunk-XC5DHP6E.js";
import {
  StringNullableWithAggregatesFilterSchema
} from "./chunk-PPWAMBJ5.js";
import {
  IntWithAggregatesFilterSchema
} from "./chunk-HDUCGDMF.js";
import {
  DateTimeWithAggregatesFilterSchema
} from "./chunk-ZR5SQAPI.js";

// src/database/inputTypeSchemas/TimePeriodScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var TimePeriodScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => TimePeriodScalarWhereWithAggregatesInputSchema), z.lazy(() => TimePeriodScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => TimePeriodScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => TimePeriodScalarWhereWithAggregatesInputSchema), z.lazy(() => TimePeriodScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  start: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  end: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()]).optional().nullable(),
  dietId: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable()
}).strict();
var TimePeriodScalarWhereWithAggregatesInputSchema_default = TimePeriodScalarWhereWithAggregatesInputSchema;

export {
  TimePeriodScalarWhereWithAggregatesInputSchema,
  TimePeriodScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-5O2OVCFK.js.map