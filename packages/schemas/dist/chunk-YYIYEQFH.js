// src/database/inputTypeSchemas/MdxNoteUpdatecitationsListOrderInputSchema.ts
import { z } from "zod";
var MdxNoteUpdatecitationsListOrderInputSchema = z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
var MdxNoteUpdatecitationsListOrderInputSchema_default = MdxNoteUpdatecitationsListOrderInputSchema;

export {
  MdxNoteUpdatecitationsListOrderInputSchema,
  MdxNoteUpdatecitationsListOrderInputSchema_default
};
//# sourceMappingURL=chunk-YYIYEQFH.js.map