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

// src/database/outputTypeSchemas/ReadingListFindUniqueArgsSchema.ts
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
var ReadingListFindUniqueArgsSchema = z.object({
  select: ReadingListSelectSchema.optional(),
  include: ReadingListIncludeSchema.optional(),
  where: ReadingListWhereUniqueInputSchema
}).strict();
var ReadingListFindUniqueArgsSchema_default = ReadingListFindUniqueArgsSchema;

export {
  ReadingListSelectSchema,
  ReadingListFindUniqueArgsSchema,
  ReadingListFindUniqueArgsSchema_default
};
//# sourceMappingURL=chunk-SBKVGDG7.js.map