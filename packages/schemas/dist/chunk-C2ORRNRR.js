import {
  NestedEnumImageAlignmentFilterSchema
} from "./chunk-ILM76FOT.js";
import {
  ImageAlignmentSchema
} from "./chunk-RNDSF24S.js";

// src/database/inputTypeSchemas/EnumImageAlignmentFilterSchema.ts
import { z } from "zod";
var EnumImageAlignmentFilterSchema = z.object({
  equals: z.lazy(() => ImageAlignmentSchema).optional(),
  in: z.lazy(() => ImageAlignmentSchema).array().optional(),
  notIn: z.lazy(() => ImageAlignmentSchema).array().optional(),
  not: z.union([z.lazy(() => ImageAlignmentSchema), z.lazy(() => NestedEnumImageAlignmentFilterSchema)]).optional()
}).strict();
var EnumImageAlignmentFilterSchema_default = EnumImageAlignmentFilterSchema;

export {
  EnumImageAlignmentFilterSchema,
  EnumImageAlignmentFilterSchema_default
};
//# sourceMappingURL=chunk-C2ORRNRR.js.map