import {
  NestedStringWithAggregatesFilterSchema
} from "./chunk-JHSRNRH3.js";
import {
  NestedIntFilterSchema
} from "./chunk-IIKKCTNR.js";
import {
  NestedStringFilterSchema
} from "./chunk-Y2UWH4QY.js";
import {
  QueryModeSchema
} from "./chunk-5V6JEXGU.js";

// src/database/inputTypeSchemas/StringWithAggregatesFilterSchema.ts
import { z } from "zod";
var StringWithAggregatesFilterSchema = z.object({
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
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();
var StringWithAggregatesFilterSchema_default = StringWithAggregatesFilterSchema;

export {
  StringWithAggregatesFilterSchema,
  StringWithAggregatesFilterSchema_default
};
//# sourceMappingURL=chunk-3OYDE7JL.js.map