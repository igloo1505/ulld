import {
  BibEntryUncheckedCreateNestedManyWithoutBibInputSchema
} from "./chunk-ISKQE5DW.js";

// src/database/inputTypeSchemas/BibUncheckedCreateInputSchema.ts
import { z } from "zod";
var BibUncheckedCreateInputSchema = z.object({
  id: z.number().int().optional(),
  filename: z.string(),
  firstSync: z.coerce.date().optional(),
  lastSync: z.coerce.date().optional(),
  entries: z.lazy(() => BibEntryUncheckedCreateNestedManyWithoutBibInputSchema).optional()
}).strict();
var BibUncheckedCreateInputSchema_default = BibUncheckedCreateInputSchema;

export {
  BibUncheckedCreateInputSchema,
  BibUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-IUHJYXRM.js.map