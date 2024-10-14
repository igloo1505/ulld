import {
  BibCountOutputTypeSelectSchema
} from "./chunk-F77YACIB.js";

// src/database/outputTypeSchemas/BibCountOutputTypeArgsSchema.ts
import { z } from "zod";
var BibCountOutputTypeArgsSchema = z.object({
  select: z.lazy(() => BibCountOutputTypeSelectSchema).nullish()
}).strict();
var BibCountOutputTypeArgsSchema_default = BibCountOutputTypeSelectSchema;

export {
  BibCountOutputTypeArgsSchema,
  BibCountOutputTypeArgsSchema_default
};
//# sourceMappingURL=chunk-VR7H2BAL.js.map