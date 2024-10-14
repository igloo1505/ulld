import {
  DateTimeWithAggregatesFilterSchema
} from "./chunk-XCQN6FNH.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-3OYDE7JL.js";

// src/database/inputTypeSchemas/DailyFocusScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var DailyFocusScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => DailyFocusScalarWhereWithAggregatesInputSchema), z.lazy(() => DailyFocusScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => DailyFocusScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => DailyFocusScalarWhereWithAggregatesInputSchema), z.lazy(() => DailyFocusScalarWhereWithAggregatesInputSchema).array()]).optional(),
  value: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
}).strict();
var DailyFocusScalarWhereWithAggregatesInputSchema_default = DailyFocusScalarWhereWithAggregatesInputSchema;

export {
  DailyFocusScalarWhereWithAggregatesInputSchema,
  DailyFocusScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-IWOGSCNQ.js.map