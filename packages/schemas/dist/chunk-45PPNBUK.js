// src/database/inputTypeSchemas/NestedIntNullableFilterSchema.ts
import { z } from "zod";
var NestedIntNullableFilterSchema = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)]).optional().nullable()
}).strict();
var NestedIntNullableFilterSchema_default = NestedIntNullableFilterSchema;

export {
  NestedIntNullableFilterSchema,
  NestedIntNullableFilterSchema_default
};
//# sourceMappingURL=chunk-45PPNBUK.js.map