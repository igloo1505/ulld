import {
  NoteTypeCreateManyInputSchema
} from "./chunk-ACWN6DH7.js";

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
//# sourceMappingURL=chunk-6IDC5J2C.js.map