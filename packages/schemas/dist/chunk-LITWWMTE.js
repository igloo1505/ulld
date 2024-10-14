import {
  IpynbCreateInputSchema
} from "./chunk-KUNZCZT5.js";
import {
  IpynbUncheckedCreateInputSchema
} from "./chunk-5WXI5JL7.js";
import {
  IpynbUncheckedUpdateInputSchema
} from "./chunk-RNS7AOV3.js";
import {
  IpynbUpdateInputSchema
} from "./chunk-R7OWAAQS.js";
import {
  BibEntryFindManyArgsSchema,
  IpynbIncludeSchema,
  ReadingListFindManyArgsSchema,
  SequentialNoteListArgsSchema,
  SubjectFindManyArgsSchema,
  TagFindManyArgsSchema,
  TopicFindManyArgsSchema
} from "./chunk-JV52BDQC.js";
import {
  IpynbCountOutputTypeArgsSchema
} from "./chunk-Q4UR4XCO.js";
import {
  IpynbWhereUniqueInputSchema
} from "./chunk-NCWREB5M.js";

// src/database/outputTypeSchemas/IpynbUpsertArgsSchema.ts
import { z } from "zod";
var IpynbSelectSchema = z.object({
  id: z.boolean().optional(),
  rootRelativePath: z.boolean().optional(),
  isProtected: z.boolean().optional(),
  title: z.boolean().optional(),
  latexTitle: z.boolean().optional(),
  citationsListOrder: z.boolean().optional(),
  importantValues: z.boolean().optional(),
  href: z.boolean().optional(),
  outgoingQuickLinks: z.boolean().optional(),
  raw: z.boolean().optional(),
  sequentialKey: z.boolean().optional(),
  sequentialIndex: z.boolean().optional(),
  bookmarked: z.boolean().optional(),
  firstSync: z.boolean().optional(),
  lastSync: z.boolean().optional(),
  lastAccess: z.boolean().optional(),
  tags: z.union([z.boolean(), z.lazy(() => TagFindManyArgsSchema)]).optional(),
  topics: z.union([z.boolean(), z.lazy(() => TopicFindManyArgsSchema)]).optional(),
  subjects: z.union([z.boolean(), z.lazy(() => SubjectFindManyArgsSchema)]).optional(),
  citations: z.union([z.boolean(), z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  sequentialList: z.union([z.boolean(), z.lazy(() => SequentialNoteListArgsSchema)]).optional(),
  readingList: z.union([z.boolean(), z.lazy(() => ReadingListFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => IpynbCountOutputTypeArgsSchema)]).optional()
}).strict();
var IpynbUpsertArgsSchema = z.object({
  select: IpynbSelectSchema.optional(),
  include: IpynbIncludeSchema.optional(),
  where: IpynbWhereUniqueInputSchema,
  create: z.union([IpynbCreateInputSchema, IpynbUncheckedCreateInputSchema]),
  update: z.union([IpynbUpdateInputSchema, IpynbUncheckedUpdateInputSchema])
}).strict();
var IpynbUpsertArgsSchema_default = IpynbUpsertArgsSchema;

export {
  IpynbSelectSchema,
  IpynbUpsertArgsSchema,
  IpynbUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-LITWWMTE.js.map