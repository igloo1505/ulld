import {
  ReadingListCreateInputSchema
} from "./chunk-KJW6N4BZ.js";
import {
  ReadingListUncheckedCreateInputSchema
} from "./chunk-DPEETJCO.js";
import {
  ReadingListUncheckedUpdateInputSchema
} from "./chunk-VGIHWIR4.js";
import {
  ReadingListUpdateInputSchema
} from "./chunk-4UZJYNGX.js";
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
  ReadingListWhereUniqueInputSchema
} from "./chunk-M5S5NQW5.js";

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
//# sourceMappingURL=chunk-C36RC3OI.js.map