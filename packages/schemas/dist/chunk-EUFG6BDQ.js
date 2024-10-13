// src/database/inputTypeSchemas/IntNullableListFilterSchema.ts
import { z } from "zod";
var IntNullableListFilterSchema = z.object({
  equals: z.number().array().optional().nullable(),
  has: z.number().optional().nullable(),
  hasEvery: z.number().array().optional(),
  hasSome: z.number().array().optional(),
  isEmpty: z.boolean().optional()
}).strict();
var IntNullableListFilterSchema_default = IntNullableListFilterSchema;

export {
  IntNullableListFilterSchema,
  IntNullableListFilterSchema_default
};
//# sourceMappingURL=chunk-EUFG6BDQ.js.map