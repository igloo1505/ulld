// src/database/inputTypeSchemas/MdxNoteUpdateoutgoingQuickLinksInputSchema.ts
import { z } from "zod";
var MdxNoteUpdateoutgoingQuickLinksInputSchema = z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
var MdxNoteUpdateoutgoingQuickLinksInputSchema_default = MdxNoteUpdateoutgoingQuickLinksInputSchema;

export {
  MdxNoteUpdateoutgoingQuickLinksInputSchema,
  MdxNoteUpdateoutgoingQuickLinksInputSchema_default
};
//# sourceMappingURL=chunk-RNPMLM3R.js.map