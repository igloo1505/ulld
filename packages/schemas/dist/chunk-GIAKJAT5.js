import {
  BibEntrySelectSchema
} from "./chunk-APUKXQPQ.js";
import {
  BibEntryIncludeSchema
} from "./chunk-JV52BDQC.js";

// src/database/outputTypeSchemas/BibEntryArgsSchema.ts
import { z } from "zod";
var BibEntryArgsSchema = z.object({
  select: z.lazy(() => BibEntrySelectSchema).optional(),
  include: z.lazy(() => BibEntryIncludeSchema).optional()
}).strict();
var BibEntryArgsSchema_default = BibEntryArgsSchema;

export {
  BibEntryArgsSchema,
  BibEntryArgsSchema_default
};
//# sourceMappingURL=chunk-GIAKJAT5.js.map