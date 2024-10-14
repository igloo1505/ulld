import {
  BibScalarFieldEnumSchema
} from "./chunk-GAGYE6VK.js";
import {
  BibWhereUniqueInputSchema
} from "./chunk-ZFQO6FHY.js";
import {
  BibEntryFindManyArgsSchema,
  BibIncludeSchema
} from "./chunk-JV52BDQC.js";
import {
  BibCountOutputTypeArgsSchema
} from "./chunk-VR7H2BAL.js";
import {
  BibOrderByWithRelationInputSchema
} from "./chunk-ECC75BHH.js";
import {
  BibWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-ZYPIADZE.js.map