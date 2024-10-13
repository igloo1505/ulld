import {
  BibEntryFindManyArgsSchema
} from "./chunk-YNCDDFUC.js";
import {
  CitationsGroupCountOutputTypeArgsSchema
} from "./chunk-TOYFH24E.js";

// src/database/inputTypeSchemas/CitationsGroupSelectSchema.ts
import { z } from "zod";
var CitationsGroupSelectSchema = z.object({
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  entries: z.union([z.boolean(), z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CitationsGroupCountOutputTypeArgsSchema)]).optional()
}).strict();
var CitationsGroupSelectSchema_default = CitationsGroupSelectSchema;

export {
  CitationsGroupSelectSchema,
  CitationsGroupSelectSchema_default
};
//# sourceMappingURL=chunk-FLVQJFZV.js.map