import {
  NestedBoolFilterSchema
} from "./chunk-UNK6Q7TJ.js";
import {
  NestedIntFilterSchema
} from "./chunk-ZAH7LULB.js";

// src/database/inputTypeSchemas/NestedBoolWithAggregatesFilterSchema.ts
import { z } from "zod";
var NestedBoolWithAggregatesFilterSchema = z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();
var NestedBoolWithAggregatesFilterSchema_default = NestedBoolWithAggregatesFilterSchema;

export {
  NestedBoolWithAggregatesFilterSchema,
  NestedBoolWithAggregatesFilterSchema_default
};
//# sourceMappingURL=chunk-UAEZZ6HR.js.map