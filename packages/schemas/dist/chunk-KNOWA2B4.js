import {
  ReadingListCreateInputSchema
} from "./chunk-KJW6N4BZ.js";
import {
  ReadingListUncheckedCreateInputSchema
} from "./chunk-DPEETJCO.js";
import {
  BibEntryFindManyArgsSchema,
  IpynbFindManyArgsSchema,
  MdxNoteFindManyArgsSchema,
  ReadingListIncludeSchema
} from "./chunk-YNCDDFUC.js";
import {
  ReadingListCountOutputTypeArgsSchema
} from "./chunk-4BOQA6OU.js";

// src/database/outputTypeSchemas/ReadingListCreateArgsSchema.ts
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
var ReadingListCreateArgsSchema = z.object({
  select: ReadingListSelectSchema.optional(),
  include: ReadingListIncludeSchema.optional(),
  data: z.union([ReadingListCreateInputSchema, ReadingListUncheckedCreateInputSchema])
}).strict();
var ReadingListCreateArgsSchema_default = ReadingListCreateArgsSchema;

export {
  ReadingListSelectSchema,
  ReadingListCreateArgsSchema,
  ReadingListCreateArgsSchema_default
};
//# sourceMappingURL=chunk-KNOWA2B4.js.map