import {
  MdxNoteUncheckedUpdateManyInputSchema
} from "./chunk-7EHABXPO.js";
import {
  MdxNoteUpdateManyMutationInputSchema
} from "./chunk-MJK4Q22N.js";
import {
  MdxNoteWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/MdxNoteUpdateManyArgsSchema.ts
import { z } from "zod";
var MdxNoteUpdateManyArgsSchema = z.object({
  data: z.union([MdxNoteUpdateManyMutationInputSchema, MdxNoteUncheckedUpdateManyInputSchema]),
  where: MdxNoteWhereInputSchema.optional()
}).strict();
var MdxNoteUpdateManyArgsSchema_default = MdxNoteUpdateManyArgsSchema;

export {
  MdxNoteUpdateManyArgsSchema,
  MdxNoteUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-JAVI5TA6.js.map