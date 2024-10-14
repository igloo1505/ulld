// src/database/inputTypeSchemas/NestedIntFilterSchema.ts
import { z } from "zod";
var NestedIntFilterSchema = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional()
}).strict();
var NestedIntFilterSchema_default = NestedIntFilterSchema;

export {
  NestedIntFilterSchema,
  NestedIntFilterSchema_default
};
//# sourceMappingURL=chunk-IIKKCTNR.js.map