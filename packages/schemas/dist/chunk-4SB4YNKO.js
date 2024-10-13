import {
  BibScalarFieldEnumSchema
} from "./chunk-G5LILCUI.js";
import {
  BibWhereUniqueInputSchema
} from "./chunk-GOTDWA2C.js";
import {
  BibEntryFindManyArgsSchema,
  BibIncludeSchema
} from "./chunk-YNCDDFUC.js";
import {
  BibCountOutputTypeArgsSchema
} from "./chunk-RPHQPYNG.js";
import {
  BibOrderByWithRelationInputSchema
} from "./chunk-JBWO2EJO.js";
import {
  BibWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/BibFindFirstArgsSchema.ts
import { z } from "zod";
var BibSelectSchema = z.object({
  id: z.boolean().optional(),
  filename: z.boolean().optional(),
  firstSync: z.boolean().optional(),
  lastSync: z.boolean().optional(),
  entries: z.union([z.boolean(), z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => BibCountOutputTypeArgsSchema)]).optional()
}).strict();
var BibFindFirstArgsSchema = z.object({
  select: BibSelectSchema.optional(),
  include: BibIncludeSchema.optional(),
  where: BibWhereInputSchema.optional(),
  orderBy: z.union([BibOrderByWithRelationInputSchema.array(), BibOrderByWithRelationInputSchema]).optional(),
  cursor: BibWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([BibScalarFieldEnumSchema, BibScalarFieldEnumSchema.array()]).optional()
}).strict();
var BibFindFirstArgsSchema_default = BibFindFirstArgsSchema;

export {
  BibSelectSchema,
  BibFindFirstArgsSchema,
  BibFindFirstArgsSchema_default
};
//# sourceMappingURL=chunk-4SB4YNKO.js.map