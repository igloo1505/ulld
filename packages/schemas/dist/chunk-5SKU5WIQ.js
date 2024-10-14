import {
  DateTimeNullableWithAggregatesFilterSchema
} from "./chunk-CRFLRRUS.js";
import {
  StringNullableWithAggregatesFilterSchema
} from "./chunk-BZ55PUI6.js";
import {
  IntWithAggregatesFilterSchema
} from "./chunk-S2WAI7QC.js";
import {
  DateTimeWithAggregatesFilterSchema
} from "./chunk-XCQN6FNH.js";

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
//# sourceMappingURL=chunk-5SKU5WIQ.js.map