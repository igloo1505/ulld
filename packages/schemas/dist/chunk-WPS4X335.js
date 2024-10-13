import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/NoteTypeUpdateManyMutationInputSchema.ts
import { z } from "zod";
var NoteTypeUpdateManyMutationInputSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var NoteTypeUpdateManyMutationInputSchema_default = NoteTypeUpdateManyMutationInputSchema;

export {
  NoteTypeUpdateManyMutationInputSchema,
  NoteTypeUpdateManyMutationInputSchema_default
};
//# sourceMappingURL=chunk-WPS4X335.js.map