import {
  MdxNoteCreateManyInputSchema
} from "./chunk-SRSWC7WW.js";

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
//# sourceMappingURL=chunk-KFQHQ6AQ.js.map