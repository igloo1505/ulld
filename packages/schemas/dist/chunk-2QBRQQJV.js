import {
  NestedStringNullableFilterSchema
} from "./chunk-W2Q3SLBN.js";
import {
  QueryModeSchema
} from "./chunk-5IFP6NSR.js";

// src/database/inputTypeSchemas/StringNullableFilterSchema.ts
import { z } from "zod";
var StringNullableFilterSchema = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  search: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)]).optional().nullable()
}).strict();
var StringNullableFilterSchema_default = StringNullableFilterSchema;

export {
  StringNullableFilterSchema,
  StringNullableFilterSchema_default
};
//# sourceMappingURL=chunk-2QBRQQJV.js.map