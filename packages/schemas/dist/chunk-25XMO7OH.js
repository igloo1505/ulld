import {
  NestedIntNullableFilterSchema
} from "./chunk-45PPNBUK.js";

// src/database/inputTypeSchemas/IntNullableFilterSchema.ts
import { z } from "zod";
var IntNullableFilterSchema = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)]).optional().nullable()
}).strict();
var IntNullableFilterSchema_default = IntNullableFilterSchema;

export {
  IntNullableFilterSchema,
  IntNullableFilterSchema_default
};
//# sourceMappingURL=chunk-25XMO7OH.js.map