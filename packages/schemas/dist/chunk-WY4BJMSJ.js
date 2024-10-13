import {
  NestedIntFilterSchema
} from "./chunk-ZAH7LULB.js";
import {
  NestedBytesFilterSchema
} from "./chunk-CEW2QSQM.js";

// src/database/inputTypeSchemas/NestedBytesWithAggregatesFilterSchema.ts
import { z } from "zod";
var NestedBytesWithAggregatesFilterSchema = z.object({
  equals: z.instanceof(Buffer).optional(),
  in: z.instanceof(Buffer).array().optional(),
  notIn: z.instanceof(Buffer).array().optional(),
  not: z.union([z.instanceof(Buffer), z.lazy(() => NestedBytesWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBytesFilterSchema).optional(),
  _max: z.lazy(() => NestedBytesFilterSchema).optional()
}).strict();
var NestedBytesWithAggregatesFilterSchema_default = NestedBytesWithAggregatesFilterSchema;

export {
  NestedBytesWithAggregatesFilterSchema,
  NestedBytesWithAggregatesFilterSchema_default
};
//# sourceMappingURL=chunk-WY4BJMSJ.js.map