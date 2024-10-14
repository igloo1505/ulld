// src/database/inputTypeSchemas/FloatNullableListFilterSchema.ts
import { z } from "zod";
var FloatNullableListFilterSchema = z.object({
  equals: z.number().array().optional().nullable(),
  has: z.number().optional().nullable(),
  hasEvery: z.number().array().optional(),
  hasSome: z.number().array().optional(),
  isEmpty: z.boolean().optional()
}).strict();
var FloatNullableListFilterSchema_default = FloatNullableListFilterSchema;

export {
  FloatNullableListFilterSchema,
  FloatNullableListFilterSchema_default
};
//# sourceMappingURL=chunk-KLW7VRYK.js.map