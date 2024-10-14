// src/database/inputTypeSchemas/NestedBoolNullableFilterSchema.ts
import { z } from "zod";
var NestedBoolNullableFilterSchema = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolNullableFilterSchema)]).optional().nullable()
}).strict();
var NestedBoolNullableFilterSchema_default = NestedBoolNullableFilterSchema;

export {
  NestedBoolNullableFilterSchema,
  NestedBoolNullableFilterSchema_default
};
//# sourceMappingURL=chunk-QRRELMSU.js.map