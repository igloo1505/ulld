import {
  MdxNoteCreateManyInputSchema
} from "./chunk-3PNL7WXZ.js";

// src/database/outputTypeSchemas/MdxNoteCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var MdxNoteCreateManyAndReturnArgsSchema = z.object({
  data: z.union([MdxNoteCreateManyInputSchema, MdxNoteCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var MdxNoteCreateManyAndReturnArgsSchema_default = MdxNoteCreateManyAndReturnArgsSchema;

export {
  MdxNoteCreateManyAndReturnArgsSchema,
  MdxNoteCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-TYWHOJRG.js.map