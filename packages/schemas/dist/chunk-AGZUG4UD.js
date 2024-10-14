import {
  BibEntryFindManyArgsSchema,
  IpynbFindManyArgsSchema,
  MdxNoteFindManyArgsSchema,
  ReadingListIncludeSchema
} from "./chunk-JV52BDQC.js";
import {
  ReadingListCountOutputTypeArgsSchema
} from "./chunk-AKWFQI63.js";
import {
  ReadingListOrderByWithRelationInputSchema
} from "./chunk-XYII44FB.js";
import {
  ReadingListWhereUniqueInputSchema
} from "./chunk-UDE55YSZ.js";
import {
  ReadingListScalarFieldEnumSchema
} from "./chunk-MZFNSGGS.js";
import {
  ReadingListWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/ReadingListFindFirstOrThrowArgsSchema.ts
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
var ReadingListFindFirstOrThrowArgsSchema = z.object({
  select: ReadingListSelectSchema.optional(),
  include: ReadingListIncludeSchema.optional(),
  where: ReadingListWhereInputSchema.optional(),
  orderBy: z.union([ReadingListOrderByWithRelationInputSchema.array(), ReadingListOrderByWithRelationInputSchema]).optional(),
  cursor: ReadingListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ReadingListScalarFieldEnumSchema, ReadingListScalarFieldEnumSchema.array()]).optional()
}).strict();
var ReadingListFindFirstOrThrowArgsSchema_default = ReadingListFindFirstOrThrowArgsSchema;

export {
  ReadingListSelectSchema,
  ReadingListFindFirstOrThrowArgsSchema,
  ReadingListFindFirstOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-AGZUG4UD.js.map