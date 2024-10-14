// src/database/inputTypeSchemas/NestedStringFilterSchema.ts
import { z } from "zod";
var NestedStringFilterSchema = z.object({
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
  not: z.union([z.string(), z.lazy(() => NestedStringFilterSchema)]).optional()
}).strict();
var NestedStringFilterSchema_default = NestedStringFilterSchema;

export {
  NestedStringFilterSchema,
  NestedStringFilterSchema_default
};
//# sourceMappingURL=chunk-Y2UWH4QY.js.map