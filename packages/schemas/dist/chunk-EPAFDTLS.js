import {
  NoteTypeCreateManyInputSchema
} from "./chunk-MU5C7PFG.js";

// src/database/outputTypeSchemas/NoteTypeCreateManyArgsSchema.ts
import { z } from "zod";
var NoteTypeCreateManyArgsSchema = z.object({
  data: z.union([NoteTypeCreateManyInputSchema, NoteTypeCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var NoteTypeCreateManyArgsSchema_default = NoteTypeCreateManyArgsSchema;

export {
  NoteTypeCreateManyArgsSchema,
  NoteTypeCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-EPAFDTLS.js.map