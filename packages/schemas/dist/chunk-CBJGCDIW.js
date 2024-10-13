import {
  BibEntryCountOutputTypeSelectSchema
} from "./chunk-DAZ5TDG2.js";

// src/database/outputTypeSchemas/BibEntryCountOutputTypeArgsSchema.ts
import { z } from "zod";
var BibEntryCountOutputTypeArgsSchema = z.object({
  select: z.lazy(() => BibEntryCountOutputTypeSelectSchema).nullish()
}).strict();
var BibEntryCountOutputTypeArgsSchema_default = BibEntryCountOutputTypeSelectSchema;

export {
  BibEntryCountOutputTypeArgsSchema,
  BibEntryCountOutputTypeArgsSchema_default
};
//# sourceMappingURL=chunk-CBJGCDIW.js.map