import {
  IpynbUncheckedUpdateManyWithoutSequentialListNestedInputSchema,
  MdxNoteUncheckedUpdateManyWithoutSequentialListNestedInputSchema
} from "./chunk-5MUGYHMK.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

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
//# sourceMappingURL=chunk-FE2ZTLSA.js.map