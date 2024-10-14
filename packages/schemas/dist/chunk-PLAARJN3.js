import {
  IntWithAggregatesFilterSchema
} from "./chunk-S2WAI7QC.js";
import {
  DateTimeWithAggregatesFilterSchema
} from "./chunk-XCQN6FNH.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-3OYDE7JL.js";

// src/database/inputTypeSchemas/WaitlistRequestScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var WaitlistRequestScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => WaitlistRequestScalarWhereWithAggregatesInputSchema), z.lazy(() => WaitlistRequestScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => WaitlistRequestScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => WaitlistRequestScalarWhereWithAggregatesInputSchema), z.lazy(() => WaitlistRequestScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  receivedOn: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  emailsSent: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional()
}).strict();
var WaitlistRequestScalarWhereWithAggregatesInputSchema_default = WaitlistRequestScalarWhereWithAggregatesInputSchema;

export {
  WaitlistRequestScalarWhereWithAggregatesInputSchema,
  WaitlistRequestScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-PLAARJN3.js.map