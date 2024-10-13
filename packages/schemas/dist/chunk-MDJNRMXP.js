import {
  NestedFloatNullableFilterSchema
} from "./chunk-RHPAY4BN.js";

// src/database/inputTypeSchemas/FloatNullableFilterSchema.ts
import { z } from "zod";
var FloatNullableFilterSchema = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatNullableFilterSchema)]).optional().nullable()
}).strict();
var FloatNullableFilterSchema_default = FloatNullableFilterSchema;

export {
  FloatNullableFilterSchema,
  FloatNullableFilterSchema_default
};
//# sourceMappingURL=chunk-MDJNRMXP.js.map