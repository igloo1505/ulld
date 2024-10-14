import {
  BibEntryCreateManyInputSchema
} from "./chunk-IFO6IHMV.js";

// src/database/outputTypeSchemas/BibEntryCreateManyArgsSchema.ts
import { z } from "zod";
var BibEntryCreateManyArgsSchema = z.object({
  data: z.union([BibEntryCreateManyInputSchema, BibEntryCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var BibEntryCreateManyArgsSchema_default = BibEntryCreateManyArgsSchema;

export {
  BibEntryCreateManyArgsSchema,
  BibEntryCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-UDOG6D42.js.map