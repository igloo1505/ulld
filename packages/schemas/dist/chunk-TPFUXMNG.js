import {
  NestedFloatFilterSchema
} from "./chunk-NTRL3LS5.js";
import {
  NestedIntFilterSchema
} from "./chunk-IIKKCTNR.js";

// src/database/inputTypeSchemas/NestedFloatWithAggregatesFilterSchema.ts
import { z } from "zod";
var NestedFloatWithAggregatesFilterSchema = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();
var NestedFloatWithAggregatesFilterSchema_default = NestedFloatWithAggregatesFilterSchema;

export {
  NestedFloatWithAggregatesFilterSchema,
  NestedFloatWithAggregatesFilterSchema_default
};
//# sourceMappingURL=chunk-TPFUXMNG.js.map