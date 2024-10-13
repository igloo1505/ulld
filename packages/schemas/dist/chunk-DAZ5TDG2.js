// src/database/outputTypeSchemas/BibEntryCountOutputTypeSelectSchema.ts
import { z } from "zod";
var BibEntryCountOutputTypeSelectSchema = z.object({
  citationGroups: z.boolean().optional(),
  tags: z.boolean().optional(),
  topics: z.boolean().optional(),
  subjects: z.boolean().optional(),
  MdxNotes: z.boolean().optional(),
  ipynbNotes: z.boolean().optional(),
  readingList: z.boolean().optional()
}).strict();
var BibEntryCountOutputTypeSelectSchema_default = BibEntryCountOutputTypeSelectSchema;

export {
  BibEntryCountOutputTypeSelectSchema,
  BibEntryCountOutputTypeSelectSchema_default
};
//# sourceMappingURL=chunk-DAZ5TDG2.js.map