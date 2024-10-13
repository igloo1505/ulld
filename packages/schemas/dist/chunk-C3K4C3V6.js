import {
  SequentialNoteListCreateManyInputSchema
} from "./chunk-YV5DHU5V.js";

// src/database/outputTypeSchemas/SequentialNoteListCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var SequentialNoteListCreateManyAndReturnArgsSchema = z.object({
  data: z.union([SequentialNoteListCreateManyInputSchema, SequentialNoteListCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var SequentialNoteListCreateManyAndReturnArgsSchema_default = SequentialNoteListCreateManyAndReturnArgsSchema;

export {
  SequentialNoteListCreateManyAndReturnArgsSchema,
  SequentialNoteListCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-C3K4C3V6.js.map