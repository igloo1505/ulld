// src/database/inputTypeSchemas/NestedStringNullableFilterSchema.ts
import { z } from "zod";
var NestedStringNullableFilterSchema = z.object({
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
  not: z.union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)]).optional().nullable()
}).strict();
var NestedStringNullableFilterSchema_default = NestedStringNullableFilterSchema;

export {
  NestedStringNullableFilterSchema,
  NestedStringNullableFilterSchema_default
};
//# sourceMappingURL=chunk-W2Q3SLBN.js.map