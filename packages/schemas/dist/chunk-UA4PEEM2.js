import {
  CitationsGroupUpdateInputSchema
} from "./chunk-LUXHQYGG.js";
import {
  CitationsGroupUncheckedUpdateInputSchema
} from "./chunk-LU57W46Q.js";
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

// src/database/outputTypeSchemas/CitationsGroupUpdateArgsSchema.ts
import { z } from "zod";
var CitationsGroupSelectSchema = z.object({
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  entries: z.union([z.boolean(), z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CitationsGroupCountOutputTypeArgsSchema)]).optional()
}).strict();
var CitationsGroupUpdateArgsSchema = z.object({
  select: CitationsGroupSelectSchema.optional(),
  include: CitationsGroupIncludeSchema.optional(),
  data: z.union([CitationsGroupUpdateInputSchema, CitationsGroupUncheckedUpdateInputSchema]),
  where: CitationsGroupWhereUniqueInputSchema
}).strict();
var CitationsGroupUpdateArgsSchema_default = CitationsGroupUpdateArgsSchema;

export {
  CitationsGroupSelectSchema,
  CitationsGroupUpdateArgsSchema,
  CitationsGroupUpdateArgsSchema_default
};
//# sourceMappingURL=chunk-UA4PEEM2.js.map