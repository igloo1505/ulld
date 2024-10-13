import {
  CitationsGroupCreateInputSchema
} from "./chunk-TXCLRKJM.js";
import {
  CitationsGroupUncheckedCreateInputSchema
} from "./chunk-V666PHNU.js";
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

// src/database/outputTypeSchemas/CitationsGroupUpsertArgsSchema.ts
import { z } from "zod";
var CitationsGroupSelectSchema = z.object({
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  entries: z.union([z.boolean(), z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CitationsGroupCountOutputTypeArgsSchema)]).optional()
}).strict();
var CitationsGroupUpsertArgsSchema = z.object({
  select: CitationsGroupSelectSchema.optional(),
  include: CitationsGroupIncludeSchema.optional(),
  where: CitationsGroupWhereUniqueInputSchema,
  create: z.union([CitationsGroupCreateInputSchema, CitationsGroupUncheckedCreateInputSchema]),
  update: z.union([CitationsGroupUpdateInputSchema, CitationsGroupUncheckedUpdateInputSchema])
}).strict();
var CitationsGroupUpsertArgsSchema_default = CitationsGroupUpsertArgsSchema;

export {
  CitationsGroupSelectSchema,
  CitationsGroupUpsertArgsSchema,
  CitationsGroupUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-GKQGFIHY.js.map