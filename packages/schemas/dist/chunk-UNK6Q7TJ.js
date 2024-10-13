// src/database/inputTypeSchemas/NestedBoolFilterSchema.ts
import { z } from "zod";
var NestedBoolFilterSchema = z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)]).optional()
}).strict();
var NestedBoolFilterSchema_default = NestedBoolFilterSchema;

export {
  NestedBoolFilterSchema,
  NestedBoolFilterSchema_default
};
//# sourceMappingURL=chunk-UNK6Q7TJ.js.map