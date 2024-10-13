import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

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
//# sourceMappingURL=chunk-7ENCB5QE.js.map