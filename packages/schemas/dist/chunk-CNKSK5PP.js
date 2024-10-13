import {
  IpynbUncheckedCreateNestedManyWithoutSequentialListInputSchema,
  MdxNoteUncheckedCreateNestedManyWithoutSequentialListInputSchema
} from "./chunk-JOZ37TAM.js";

// src/database/inputTypeSchemas/SequentialNoteListUncheckedCreateInputSchema.ts
import { z } from "zod";
var SequentialNoteListUncheckedCreateInputSchema = z.object({
  sequentialKey: z.string(),
  MdxNote: z.lazy(() => MdxNoteUncheckedCreateNestedManyWithoutSequentialListInputSchema).optional(),
  Ipynb: z.lazy(() => IpynbUncheckedCreateNestedManyWithoutSequentialListInputSchema).optional()
}).strict();
var SequentialNoteListUncheckedCreateInputSchema_default = SequentialNoteListUncheckedCreateInputSchema;

export {
  SequentialNoteListUncheckedCreateInputSchema,
  SequentialNoteListUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-CNKSK5PP.js.map