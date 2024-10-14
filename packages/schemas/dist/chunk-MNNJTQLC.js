// src/database/inputTypeSchemas/BibUncheckedCreateWithoutEntriesInputSchema.ts
import { z } from "zod";
var BibUncheckedCreateWithoutEntriesInputSchema = z.object({
  id: z.number().int().optional(),
  filename: z.string(),
  firstSync: z.coerce.date().optional(),
  lastSync: z.coerce.date().optional()
}).strict();
var BibUncheckedCreateWithoutEntriesInputSchema_default = BibUncheckedCreateWithoutEntriesInputSchema;

export {
  BibUncheckedCreateWithoutEntriesInputSchema,
  BibUncheckedCreateWithoutEntriesInputSchema_default
};
//# sourceMappingURL=chunk-MNNJTQLC.js.map