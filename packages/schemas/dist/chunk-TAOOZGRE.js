import {
  IpynbUpdateManyWithoutSequentialListNestedInputSchema,
  MdxNoteUpdateManyWithoutSequentialListNestedInputSchema
} from "./chunk-2SDBTX3Y.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/SequentialNoteListUpdateInputSchema.ts
import { z } from "zod";
var SequentialNoteListUpdateInputSchema = z.object({
  sequentialKey: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  MdxNote: z.lazy(() => MdxNoteUpdateManyWithoutSequentialListNestedInputSchema).optional(),
  Ipynb: z.lazy(() => IpynbUpdateManyWithoutSequentialListNestedInputSchema).optional()
}).strict();
var SequentialNoteListUpdateInputSchema_default = SequentialNoteListUpdateInputSchema;

export {
  SequentialNoteListUpdateInputSchema,
  SequentialNoteListUpdateInputSchema_default
};
//# sourceMappingURL=chunk-TAOOZGRE.js.map