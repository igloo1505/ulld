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
//# sourceMappingURL=chunk-5TDVESQY.js.map