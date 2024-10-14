import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

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
//# sourceMappingURL=chunk-MKCHFW3T.js.map