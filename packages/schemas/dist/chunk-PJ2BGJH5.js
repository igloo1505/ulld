import {
  NestedStringFilterSchema
} from "./chunk-3OWSCGZO.js";
import {
  QueryModeSchema
} from "./chunk-5IFP6NSR.js";

// src/database/inputTypeSchemas/StringFilterSchema.ts
import { z } from "zod";
var StringFilterSchema = z.object({
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
  not: z.union([z.string(), z.lazy(() => NestedStringFilterSchema)]).optional()
}).strict();
var StringFilterSchema_default = StringFilterSchema;

export {
  StringFilterSchema,
  StringFilterSchema_default
};
//# sourceMappingURL=chunk-PJ2BGJH5.js.map