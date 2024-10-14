// src/database/inputTypeSchemas/MdxNoteUpdateimportantValuesInputSchema.ts
import { z } from "zod";
var MdxNoteUpdateimportantValuesInputSchema = z.object({
  set: z.number().array().optional(),
  push: z.union([z.number(), z.number().array()]).optional()
}).strict();
var MdxNoteUpdateimportantValuesInputSchema_default = MdxNoteUpdateimportantValuesInputSchema;

export {
  MdxNoteUpdateimportantValuesInputSchema,
  MdxNoteUpdateimportantValuesInputSchema_default
};
//# sourceMappingURL=chunk-PQC7BMWQ.js.map