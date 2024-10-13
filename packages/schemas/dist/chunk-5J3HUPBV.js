import {
  DateTimeWithAggregatesFilterSchema
} from "./chunk-ZR5SQAPI.js";
import {
  BytesWithAggregatesFilterSchema
} from "./chunk-3IDFRH4D.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-Z5POB6WI.js";

// src/database/inputTypeSchemas/SettingsAppendixScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var SettingsAppendixScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => SettingsAppendixScalarWhereWithAggregatesInputSchema), z.lazy(() => SettingsAppendixScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => SettingsAppendixScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => SettingsAppendixScalarWhereWithAggregatesInputSchema), z.lazy(() => SettingsAppendixScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  data: z.union([z.lazy(() => BytesWithAggregatesFilterSchema), z.instanceof(Buffer)]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
}).strict();
var SettingsAppendixScalarWhereWithAggregatesInputSchema_default = SettingsAppendixScalarWhereWithAggregatesInputSchema;

export {
  SettingsAppendixScalarWhereWithAggregatesInputSchema,
  SettingsAppendixScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-5J3HUPBV.js.map