import {
  NestedIntFilterSchema
} from "./chunk-ZAH7LULB.js";
import {
  NestedStringFilterSchema
} from "./chunk-3OWSCGZO.js";

// src/database/inputTypeSchemas/NestedStringWithAggregatesFilterSchema.ts
import { z } from "zod";
var NestedStringWithAggregatesFilterSchema = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  search: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();
var NestedStringWithAggregatesFilterSchema_default = NestedStringWithAggregatesFilterSchema;

export {
  NestedStringWithAggregatesFilterSchema,
  NestedStringWithAggregatesFilterSchema_default
};
//# sourceMappingURL=chunk-S5N46FRE.js.map