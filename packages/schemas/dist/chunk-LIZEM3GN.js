import {
  BibEntryCreateNestedManyWithoutBibInputSchema
} from "./chunk-FYVGKRXH.js";

// src/database/inputTypeSchemas/BibCreateInputSchema.ts
import { z } from "zod";
var BibCreateInputSchema = z.object({
  id: z.number().int().optional(),
  filename: z.string(),
  firstSync: z.coerce.date().optional(),
  lastSync: z.coerce.date().optional(),
  entries: z.lazy(() => BibEntryCreateNestedManyWithoutBibInputSchema).optional()
}).strict();
var BibCreateInputSchema_default = BibCreateInputSchema;

export {
  BibCreateInputSchema,
  BibCreateInputSchema_default
};
//# sourceMappingURL=chunk-LIZEM3GN.js.map