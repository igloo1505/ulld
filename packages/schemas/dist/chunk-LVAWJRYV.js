import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/NoteTypeUncheckedUpdateInputSchema.ts
import { z } from "zod";
var NoteTypeUncheckedUpdateInputSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var NoteTypeUncheckedUpdateInputSchema_default = NoteTypeUncheckedUpdateInputSchema;

export {
  NoteTypeUncheckedUpdateInputSchema,
  NoteTypeUncheckedUpdateInputSchema_default
};
//# sourceMappingURL=chunk-LVAWJRYV.js.map