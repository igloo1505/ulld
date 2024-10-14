import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/NoteTypeUncheckedUpdateManyInputSchema.ts
import { z } from "zod";
var NoteTypeUncheckedUpdateManyInputSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var NoteTypeUncheckedUpdateManyInputSchema_default = NoteTypeUncheckedUpdateManyInputSchema;

export {
  NoteTypeUncheckedUpdateManyInputSchema,
  NoteTypeUncheckedUpdateManyInputSchema_default
};
//# sourceMappingURL=chunk-B5KKAIWF.js.map