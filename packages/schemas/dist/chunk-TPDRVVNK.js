import {
  NestedFloatFilterSchema
} from "./chunk-NTRL3LS5.js";
import {
  NestedIntFilterSchema
} from "./chunk-IIKKCTNR.js";

// src/database/inputTypeSchemas/NestedIntWithAggregatesFilterSchema.ts
import { z } from "zod";
var NestedIntWithAggregatesFilterSchema = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();
var NestedIntWithAggregatesFilterSchema_default = NestedIntWithAggregatesFilterSchema;

export {
  NestedIntWithAggregatesFilterSchema,
  NestedIntWithAggregatesFilterSchema_default
};
//# sourceMappingURL=chunk-TPDRVVNK.js.map