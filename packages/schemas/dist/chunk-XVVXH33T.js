import {
  BibEntryFindManyArgsSchema,
  IpynbFindManyArgsSchema,
  MdxNoteFindManyArgsSchema,
  ReadingListIncludeSchema
} from "./chunk-YNCDDFUC.js";
import {
  ReadingListCountOutputTypeArgsSchema
} from "./chunk-4BOQA6OU.js";
import {
  ReadingListOrderByWithRelationInputSchema
} from "./chunk-5OWQCS6Y.js";
import {
  ReadingListWhereUniqueInputSchema
} from "./chunk-M5S5NQW5.js";
import {
  ReadingListScalarFieldEnumSchema
} from "./chunk-L5ELCGOF.js";
import {
  ReadingListWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/ReadingListFindFirstArgsSchema.ts
import { z } from "zod";
var ReadingListSelectSchema = z.object({
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  lastUpdate: z.boolean().optional(),
  bibEntries: z.union([z.boolean(), z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  mdxNotes: z.union([z.boolean(), z.lazy(() => MdxNoteFindManyArgsSchema)]).optional(),
  ipynbNotes: z.union([z.boolean(), z.lazy(() => IpynbFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ReadingListCountOutputTypeArgsSchema)]).optional()
}).strict();
var ReadingListFindFirstArgsSchema = z.object({
  select: ReadingListSelectSchema.optional(),
  include: ReadingListIncludeSchema.optional(),
  where: ReadingListWhereInputSchema.optional(),
  orderBy: z.union([ReadingListOrderByWithRelationInputSchema.array(), ReadingListOrderByWithRelationInputSchema]).optional(),
  cursor: ReadingListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ReadingListScalarFieldEnumSchema, ReadingListScalarFieldEnumSchema.array()]).optional()
}).strict();
var ReadingListFindFirstArgsSchema_default = ReadingListFindFirstArgsSchema;

export {
  ReadingListSelectSchema,
  ReadingListFindFirstArgsSchema,
  ReadingListFindFirstArgsSchema_default
};
//# sourceMappingURL=chunk-XVVXH33T.js.map