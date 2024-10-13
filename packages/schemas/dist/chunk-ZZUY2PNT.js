import {
  NestedBoolWithAggregatesFilterSchema
} from "./chunk-UAEZZ6HR.js";
import {
  NestedBoolFilterSchema
} from "./chunk-UNK6Q7TJ.js";
import {
  NestedIntFilterSchema
} from "./chunk-ZAH7LULB.js";

// src/database/inputTypeSchemas/BoolWithAggregatesFilterSchema.ts
import { z } from "zod";
var BoolWithAggregatesFilterSchema = z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();
var BoolWithAggregatesFilterSchema_default = BoolWithAggregatesFilterSchema;

export {
  BoolWithAggregatesFilterSchema,
  BoolWithAggregatesFilterSchema_default
};
//# sourceMappingURL=chunk-ZZUY2PNT.js.map