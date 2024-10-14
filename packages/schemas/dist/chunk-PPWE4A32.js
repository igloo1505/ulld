// src/database/inputTypeSchemas/NestedFloatNullableFilterSchema.ts
import { z } from "zod";
var NestedFloatNullableFilterSchema = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatNullableFilterSchema)]).optional().nullable()
}).strict();
var NestedFloatNullableFilterSchema_default = NestedFloatNullableFilterSchema;

export {
  NestedFloatNullableFilterSchema,
  NestedFloatNullableFilterSchema_default
};
//# sourceMappingURL=chunk-PPWE4A32.js.map