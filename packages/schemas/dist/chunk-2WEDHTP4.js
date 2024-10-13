import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/SequentialNoteListUpdateManyMutationInputSchema.ts
import { z } from "zod";
var SequentialNoteListUpdateManyMutationInputSchema = z.object({
  sequentialKey: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var SequentialNoteListUpdateManyMutationInputSchema_default = SequentialNoteListUpdateManyMutationInputSchema;

export {
  SequentialNoteListUpdateManyMutationInputSchema,
  SequentialNoteListUpdateManyMutationInputSchema_default
};
//# sourceMappingURL=chunk-2WEDHTP4.js.map