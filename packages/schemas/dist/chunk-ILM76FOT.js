import {
  ImageAlignmentSchema
} from "./chunk-RNDSF24S.js";

// src/database/inputTypeSchemas/NestedEnumImageAlignmentFilterSchema.ts
import { z } from "zod";
var NestedEnumImageAlignmentFilterSchema = z.object({
  equals: z.lazy(() => ImageAlignmentSchema).optional(),
  in: z.lazy(() => ImageAlignmentSchema).array().optional(),
  notIn: z.lazy(() => ImageAlignmentSchema).array().optional(),
  not: z.union([z.lazy(() => ImageAlignmentSchema), z.lazy(() => NestedEnumImageAlignmentFilterSchema)]).optional()
}).strict();
var NestedEnumImageAlignmentFilterSchema_default = NestedEnumImageAlignmentFilterSchema;

export {
  NestedEnumImageAlignmentFilterSchema,
  NestedEnumImageAlignmentFilterSchema_default
};
//# sourceMappingURL=chunk-ILM76FOT.js.map