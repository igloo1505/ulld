import {
  EnumautoSettingWithAggregatesFilterSchema
} from "./chunk-WRY7DTID.js";
import {
  autoSettingSchema
} from "./chunk-EK76L66X.js";
import {
  IntWithAggregatesFilterSchema
} from "./chunk-HDUCGDMF.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-Z5POB6WI.js";

// src/database/inputTypeSchemas/AutoSettingScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var AutoSettingScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => AutoSettingScalarWhereWithAggregatesInputSchema), z.lazy(() => AutoSettingScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => AutoSettingScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => AutoSettingScalarWhereWithAggregatesInputSchema), z.lazy(() => AutoSettingScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  type: z.union([z.lazy(() => EnumautoSettingWithAggregatesFilterSchema), z.lazy(() => autoSettingSchema)]).optional(),
  glob: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  value: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional()
}).strict();
var AutoSettingScalarWhereWithAggregatesInputSchema_default = AutoSettingScalarWhereWithAggregatesInputSchema;

export {
  AutoSettingScalarWhereWithAggregatesInputSchema,
  AutoSettingScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-XWTO772P.js.map