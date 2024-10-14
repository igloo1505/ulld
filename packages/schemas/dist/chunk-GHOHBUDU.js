import {
  BibEntryFindManyArgsSchema,
  CitationsGroupIncludeSchema
} from "./chunk-JV52BDQC.js";
import {
  CitationsGroupCountOutputTypeArgsSchema
} from "./chunk-LZDVJHQX.js";
import {
  CitationsGroupWhereUniqueInputSchema
} from "./chunk-GY5DALUC.js";

// src/database/outputTypeSchemas/CitationsGroupFindUniqueArgsSchema.ts
import { z } from "zod";
var CitationsGroupSelectSchema = z.object({
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  entries: z.union([z.boolean(), z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CitationsGroupCountOutputTypeArgsSchema)]).optional()
}).strict();
var CitationsGroupFindUniqueArgsSchema = z.object({
  select: CitationsGroupSelectSchema.optional(),
  include: CitationsGroupIncludeSchema.optional(),
  where: CitationsGroupWhereUniqueInputSchema
}).strict();
var CitationsGroupFindUniqueArgsSchema_default = CitationsGroupFindUniqueArgsSchema;

export {
  CitationsGroupSelectSchema,
  CitationsGroupFindUniqueArgsSchema,
  CitationsGroupFindUniqueArgsSchema_default
};
//# sourceMappingURL=chunk-GHOHBUDU.js.map