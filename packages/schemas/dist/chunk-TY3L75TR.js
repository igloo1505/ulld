import {
  BibEntrySelectSchema
} from "./chunk-ZI7AA24L.js";
import {
  BibEntryIncludeSchema
} from "./chunk-YNCDDFUC.js";

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
//# sourceMappingURL=chunk-TY3L75TR.js.map