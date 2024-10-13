// src/database/inputTypeSchemas/BibCreateManyInputSchema.ts
import { z } from "zod";
var BibCreateManyInputSchema = z.object({
  id: z.number().int().optional(),
  filename: z.string(),
  firstSync: z.coerce.date().optional(),
  lastSync: z.coerce.date().optional()
}).strict();
var BibCreateManyInputSchema_default = BibCreateManyInputSchema;

export {
  BibCreateManyInputSchema,
  BibCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-NZDDVQLS.js.map