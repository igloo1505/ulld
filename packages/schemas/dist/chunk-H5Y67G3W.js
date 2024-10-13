import {
  BibEntryFindManyArgsSchema,
  CitationsGroupIncludeSchema
} from "./chunk-YNCDDFUC.js";
import {
  CitationsGroupCountOutputTypeArgsSchema
} from "./chunk-TOYFH24E.js";
import {
  CitationsGroupWhereUniqueInputSchema
} from "./chunk-S2NAK5Q6.js";

// src/database/outputTypeSchemas/CitationsGroupFindUniqueOrThrowArgsSchema.ts
import { z } from "zod";
var CitationsGroupSelectSchema = z.object({
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  entries: z.union([z.boolean(), z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CitationsGroupCountOutputTypeArgsSchema)]).optional()
}).strict();
var CitationsGroupFindUniqueOrThrowArgsSchema = z.object({
  select: CitationsGroupSelectSchema.optional(),
  include: CitationsGroupIncludeSchema.optional(),
  where: CitationsGroupWhereUniqueInputSchema
}).strict();
var CitationsGroupFindUniqueOrThrowArgsSchema_default = CitationsGroupFindUniqueOrThrowArgsSchema;

export {
  CitationsGroupSelectSchema,
  CitationsGroupFindUniqueOrThrowArgsSchema,
  CitationsGroupFindUniqueOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-H5Y67G3W.js.map