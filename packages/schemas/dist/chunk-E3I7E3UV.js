import {
  IpynbUpdateManyWithoutSequentialListNestedInputSchema,
  MdxNoteUpdateManyWithoutSequentialListNestedInputSchema
} from "./chunk-5MUGYHMK.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

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
//# sourceMappingURL=chunk-E3I7E3UV.js.map