import {
  MdxNoteUncheckedUpdateManyInputSchema
} from "./chunk-SWGZ7ZFV.js";
import {
  MdxNoteUpdateManyMutationInputSchema
} from "./chunk-6E2GUZTH.js";
import {
  MdxNoteWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-XWD6NEEO.js.map