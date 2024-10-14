import {
  IpynbCreateNestedManyWithoutSequentialListInputSchema,
  MdxNoteCreateNestedManyWithoutSequentialListInputSchema
} from "./chunk-5QJWIG3K.js";

// src/database/inputTypeSchemas/SequentialNoteListCreateInputSchema.ts
import { z } from "zod";
var SequentialNoteListCreateInputSchema = z.object({
  sequentialKey: z.string(),
  MdxNote: z.lazy(() => MdxNoteCreateNestedManyWithoutSequentialListInputSchema).optional(),
  Ipynb: z.lazy(() => IpynbCreateNestedManyWithoutSequentialListInputSchema).optional()
}).strict();
var SequentialNoteListCreateInputSchema_default = SequentialNoteListCreateInputSchema;

export {
  SequentialNoteListCreateInputSchema,
  SequentialNoteListCreateInputSchema_default
};
//# sourceMappingURL=chunk-5PJ6EYVS.js.map