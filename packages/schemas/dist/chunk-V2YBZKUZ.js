import {
  BibEntryFindManyArgsSchema
} from "./chunk-JV52BDQC.js";
import {
  CitationsGroupCountOutputTypeArgsSchema
} from "./chunk-LZDVJHQX.js";

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
//# sourceMappingURL=chunk-V2YBZKUZ.js.map