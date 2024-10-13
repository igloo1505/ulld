import {
  StringNullableWithAggregatesFilterSchema
} from "./chunk-PPWAMBJ5.js";
import {
  IntWithAggregatesFilterSchema
} from "./chunk-HDUCGDMF.js";

// src/database/inputTypeSchemas/GoogleCalendarAuthScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var GoogleCalendarAuthScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => GoogleCalendarAuthScalarWhereWithAggregatesInputSchema), z.lazy(() => GoogleCalendarAuthScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => GoogleCalendarAuthScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => GoogleCalendarAuthScalarWhereWithAggregatesInputSchema), z.lazy(() => GoogleCalendarAuthScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  auth: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable()
}).strict();
var GoogleCalendarAuthScalarWhereWithAggregatesInputSchema_default = GoogleCalendarAuthScalarWhereWithAggregatesInputSchema;

export {
  GoogleCalendarAuthScalarWhereWithAggregatesInputSchema,
  GoogleCalendarAuthScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-DEJPK25F.js.map