import {
  NoteTypeCreateManyInputSchema
} from "./chunk-MU5C7PFG.js";

// src/database/outputTypeSchemas/NoteTypeCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var NoteTypeCreateManyAndReturnArgsSchema = z.object({
  data: z.union([NoteTypeCreateManyInputSchema, NoteTypeCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var NoteTypeCreateManyAndReturnArgsSchema_default = NoteTypeCreateManyAndReturnArgsSchema;

export {
  NoteTypeCreateManyAndReturnArgsSchema,
  NoteTypeCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-PY4NSUY3.js.map