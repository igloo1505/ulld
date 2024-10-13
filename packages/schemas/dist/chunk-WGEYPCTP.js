import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/SequentialNoteListUncheckedUpdateManyInputSchema.ts
import { z } from "zod";
var SequentialNoteListUncheckedUpdateManyInputSchema = z.object({
  sequentialKey: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var SequentialNoteListUncheckedUpdateManyInputSchema_default = SequentialNoteListUncheckedUpdateManyInputSchema;

export {
  SequentialNoteListUncheckedUpdateManyInputSchema,
  SequentialNoteListUncheckedUpdateManyInputSchema_default
};
//# sourceMappingURL=chunk-WGEYPCTP.js.map