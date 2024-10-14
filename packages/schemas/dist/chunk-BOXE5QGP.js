import {
  MdxNoteCreateManyInputSchema
} from "./chunk-3PNL7WXZ.js";

// src/database/outputTypeSchemas/MdxNoteCreateManyArgsSchema.ts
import { z } from "zod";
var MdxNoteCreateManyArgsSchema = z.object({
  data: z.union([MdxNoteCreateManyInputSchema, MdxNoteCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var MdxNoteCreateManyArgsSchema_default = MdxNoteCreateManyArgsSchema;

export {
  MdxNoteCreateManyArgsSchema,
  MdxNoteCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-BOXE5QGP.js.map