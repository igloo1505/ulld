import {
  IpynbUncheckedUpdateManyWithoutSequentialListNestedInputSchema,
  MdxNoteUncheckedUpdateManyWithoutSequentialListNestedInputSchema
} from "./chunk-2SDBTX3Y.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/SequentialNoteListUncheckedUpdateInputSchema.ts
import { z } from "zod";
var SequentialNoteListUncheckedUpdateInputSchema = z.object({
  sequentialKey: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  MdxNote: z.lazy(() => MdxNoteUncheckedUpdateManyWithoutSequentialListNestedInputSchema).optional(),
  Ipynb: z.lazy(() => IpynbUncheckedUpdateManyWithoutSequentialListNestedInputSchema).optional()
}).strict();
var SequentialNoteListUncheckedUpdateInputSchema_default = SequentialNoteListUncheckedUpdateInputSchema;

export {
  SequentialNoteListUncheckedUpdateInputSchema,
  SequentialNoteListUncheckedUpdateInputSchema_default
};
//# sourceMappingURL=chunk-A4F2P7BY.js.map