import {
  ReadingListCreateInputSchema
} from "./chunk-MYK2VOVK.js";
import {
  ReadingListUncheckedCreateInputSchema
} from "./chunk-6ME4ORWE.js";
import {
  ReadingListUncheckedUpdateInputSchema
} from "./chunk-MTN3T4IQ.js";
import {
  ReadingListUpdateInputSchema
} from "./chunk-4TRFTXGS.js";
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
  ReadingListWhereUniqueInputSchema
} from "./chunk-UDE55YSZ.js";

// src/database/outputTypeSchemas/ReadingListUpsertArgsSchema.ts
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
var ReadingListUpsertArgsSchema = z.object({
  select: ReadingListSelectSchema.optional(),
  include: ReadingListIncludeSchema.optional(),
  where: ReadingListWhereUniqueInputSchema,
  create: z.union([ReadingListCreateInputSchema, ReadingListUncheckedCreateInputSchema]),
  update: z.union([ReadingListUpdateInputSchema, ReadingListUncheckedUpdateInputSchema])
}).strict();
var ReadingListUpsertArgsSchema_default = ReadingListUpsertArgsSchema;

export {
  ReadingListSelectSchema,
  ReadingListUpsertArgsSchema,
  ReadingListUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-7NRAR4NB.js.map