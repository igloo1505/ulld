// src/database/inputTypeSchemas/StringNullableListFilterSchema.ts
import { z } from "zod";
var StringNullableListFilterSchema = z.object({
  equals: z.string().array().optional().nullable(),
  has: z.string().optional().nullable(),
  hasEvery: z.string().array().optional(),
  hasSome: z.string().array().optional(),
  isEmpty: z.boolean().optional()
}).strict();
var StringNullableListFilterSchema_default = StringNullableListFilterSchema;

export {
  StringNullableListFilterSchema,
  StringNullableListFilterSchema_default
};
//# sourceMappingURL=chunk-6ULEVKEC.js.map