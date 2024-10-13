import {
  ImageAlignmentSchema
} from "./chunk-RNDSF24S.js";

// src/database/inputTypeSchemas/EnumImageAlignmentFieldUpdateOperationsInputSchema.ts
import { z } from "zod";
var EnumImageAlignmentFieldUpdateOperationsInputSchema = z.object({
  set: z.lazy(() => ImageAlignmentSchema).optional()
}).strict();
var EnumImageAlignmentFieldUpdateOperationsInputSchema_default = EnumImageAlignmentFieldUpdateOperationsInputSchema;

export {
  EnumImageAlignmentFieldUpdateOperationsInputSchema,
  EnumImageAlignmentFieldUpdateOperationsInputSchema_default
};
//# sourceMappingURL=chunk-X4XR22BM.js.map