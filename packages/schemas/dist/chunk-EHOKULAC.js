import {
  CitationsGroupCreateInputSchema
} from "./chunk-TXCLRKJM.js";
import {
  CitationsGroupUncheckedCreateInputSchema
} from "./chunk-V666PHNU.js";
import {
  BibEntryFindManyArgsSchema,
  CitationsGroupIncludeSchema
} from "./chunk-YNCDDFUC.js";
import {
  CitationsGroupCountOutputTypeArgsSchema
} from "./chunk-TOYFH24E.js";

// src/database/outputTypeSchemas/CitationsGroupCreateArgsSchema.ts
import { z } from "zod";
var CitationsGroupSelectSchema = z.object({
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  entries: z.union([z.boolean(), z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CitationsGroupCountOutputTypeArgsSchema)]).optional()
}).strict();
var CitationsGroupCreateArgsSchema = z.object({
  select: CitationsGroupSelectSchema.optional(),
  include: CitationsGroupIncludeSchema.optional(),
  data: z.union([CitationsGroupCreateInputSchema, CitationsGroupUncheckedCreateInputSchema])
}).strict();
var CitationsGroupCreateArgsSchema_default = CitationsGroupCreateArgsSchema;

export {
  CitationsGroupSelectSchema,
  CitationsGroupCreateArgsSchema,
  CitationsGroupCreateArgsSchema_default
};
//# sourceMappingURL=chunk-EHOKULAC.js.map