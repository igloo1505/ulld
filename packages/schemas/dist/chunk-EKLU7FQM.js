import {
  SequentialNoteListCreateManyInputSchema
} from "./chunk-YV5DHU5V.js";

// src/database/outputTypeSchemas/SequentialNoteListCreateManyArgsSchema.ts
import { z } from "zod";
var SequentialNoteListCreateManyArgsSchema = z.object({
  data: z.union([SequentialNoteListCreateManyInputSchema, SequentialNoteListCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var SequentialNoteListCreateManyArgsSchema_default = SequentialNoteListCreateManyArgsSchema;

export {
  SequentialNoteListCreateManyArgsSchema,
  SequentialNoteListCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-EKLU7FQM.js.map