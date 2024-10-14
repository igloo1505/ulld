import {
  NestedFloatFilterSchema
} from "./chunk-NTRL3LS5.js";

// src/database/inputTypeSchemas/FloatFilterSchema.ts
import { z } from "zod";
var FloatFilterSchema = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatFilterSchema)]).optional()
}).strict();
var FloatFilterSchema_default = FloatFilterSchema;

export {
  FloatFilterSchema,
  FloatFilterSchema_default
};
//# sourceMappingURL=chunk-KRPE75Q3.js.map