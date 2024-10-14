import {
  BibEntryCreateManyInputSchema
} from "./chunk-IFO6IHMV.js";

// src/database/outputTypeSchemas/BibEntryCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var BibEntryCreateManyAndReturnArgsSchema = z.object({
  data: z.union([BibEntryCreateManyInputSchema, BibEntryCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var BibEntryCreateManyAndReturnArgsSchema_default = BibEntryCreateManyAndReturnArgsSchema;

export {
  BibEntryCreateManyAndReturnArgsSchema,
  BibEntryCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-KHDDBJIR.js.map