// src/database/inputTypeSchemas/BibCreateWithoutEntriesInputSchema.ts
import { z } from "zod";
var BibCreateWithoutEntriesInputSchema = z.object({
  id: z.number().int().optional(),
  filename: z.string(),
  firstSync: z.coerce.date().optional(),
  lastSync: z.coerce.date().optional()
}).strict();
var BibCreateWithoutEntriesInputSchema_default = BibCreateWithoutEntriesInputSchema;

export {
  BibCreateWithoutEntriesInputSchema,
  BibCreateWithoutEntriesInputSchema_default
};
//# sourceMappingURL=chunk-G4BDN2HA.js.map