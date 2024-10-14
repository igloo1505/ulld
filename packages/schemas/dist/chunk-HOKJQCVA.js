import {
  CitationsGroupCreateInputSchema
} from "./chunk-2XG7OJPW.js";
import {
  CitationsGroupUncheckedCreateInputSchema
} from "./chunk-7BQ6H2UF.js";
import {
  CitationsGroupUpdateInputSchema
} from "./chunk-PUEFHM42.js";
import {
  CitationsGroupUncheckedUpdateInputSchema
} from "./chunk-BUF7MMJI.js";
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
//# sourceMappingURL=chunk-HOKJQCVA.js.map