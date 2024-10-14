// src/database/inputTypeSchemas/NestedFloatFilterSchema.ts
import { z } from "zod";
var NestedFloatFilterSchema = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatFilterSchema)]).optional()
}).strict();
var NestedFloatFilterSchema_default = NestedFloatFilterSchema;

export {
  NestedFloatFilterSchema,
  NestedFloatFilterSchema_default
};
//# sourceMappingURL=chunk-NTRL3LS5.js.map