import {
  BibEntryFindManyArgsSchema,
  CitationsGroupIncludeSchema
} from "./chunk-YNCDDFUC.js";
import {
  CitationsGroupCountOutputTypeArgsSchema
} from "./chunk-TOYFH24E.js";
import {
  CitationsGroupOrderByWithRelationInputSchema
} from "./chunk-O6ZQ3TDJ.js";
import {
  CitationsGroupWhereUniqueInputSchema
} from "./chunk-S2NAK5Q6.js";
import {
  CitationsGroupScalarFieldEnumSchema
} from "./chunk-GPSZTTIR.js";
import {
  CitationsGroupWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/CitationsGroupFindFirstOrThrowArgsSchema.ts
import { z } from "zod";
var CitationsGroupSelectSchema = z.object({
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  entries: z.union([z.boolean(), z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CitationsGroupCountOutputTypeArgsSchema)]).optional()
}).strict();
var CitationsGroupFindFirstOrThrowArgsSchema = z.object({
  select: CitationsGroupSelectSchema.optional(),
  include: CitationsGroupIncludeSchema.optional(),
  where: CitationsGroupWhereInputSchema.optional(),
  orderBy: z.union([CitationsGroupOrderByWithRelationInputSchema.array(), CitationsGroupOrderByWithRelationInputSchema]).optional(),
  cursor: CitationsGroupWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([CitationsGroupScalarFieldEnumSchema, CitationsGroupScalarFieldEnumSchema.array()]).optional()
}).strict();
var CitationsGroupFindFirstOrThrowArgsSchema_default = CitationsGroupFindFirstOrThrowArgsSchema;

export {
  CitationsGroupSelectSchema,
  CitationsGroupFindFirstOrThrowArgsSchema,
  CitationsGroupFindFirstOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-ZR56SASQ.js.map