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

// src/database/outputTypeSchemas/ReadingListFindUniqueOrThrowArgsSchema.ts
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
var ReadingListFindUniqueOrThrowArgsSchema = z.object({
  select: ReadingListSelectSchema.optional(),
  include: ReadingListIncludeSchema.optional(),
  where: ReadingListWhereUniqueInputSchema
}).strict();
var ReadingListFindUniqueOrThrowArgsSchema_default = ReadingListFindUniqueOrThrowArgsSchema;

export {
  ReadingListSelectSchema,
  ReadingListFindUniqueOrThrowArgsSchema,
  ReadingListFindUniqueOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-CQOXI2BD.js.map