import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/NoteTypeUpdateInputSchema.ts
import { z } from "zod";
var NoteTypeUpdateInputSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var NoteTypeUpdateInputSchema_default = NoteTypeUpdateInputSchema;

export {
  NoteTypeUpdateInputSchema,
  NoteTypeUpdateInputSchema_default
};
//# sourceMappingURL=chunk-PI4FMAGF.js.map