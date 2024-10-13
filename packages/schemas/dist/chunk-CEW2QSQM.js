// src/database/inputTypeSchemas/NestedBytesFilterSchema.ts
import { z } from "zod";
var NestedBytesFilterSchema = z.object({
  equals: z.instanceof(Buffer).optional(),
  in: z.instanceof(Buffer).array().optional(),
  notIn: z.instanceof(Buffer).array().optional(),
  not: z.union([z.instanceof(Buffer), z.lazy(() => NestedBytesFilterSchema)]).optional()
}).strict();
var NestedBytesFilterSchema_default = NestedBytesFilterSchema;

export {
  NestedBytesFilterSchema,
  NestedBytesFilterSchema_default
};
//# sourceMappingURL=chunk-CEW2QSQM.js.map