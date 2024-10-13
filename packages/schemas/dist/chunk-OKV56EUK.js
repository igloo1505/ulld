import {
  IpynbUncheckedUpdateInputSchema
} from "./chunk-XA2JTVVI.js";
import {
  IpynbUpdateInputSchema
} from "./chunk-ZSVHJKZG.js";
import {
  BibEntryFindManyArgsSchema,
  IpynbIncludeSchema,
  ReadingListFindManyArgsSchema,
  SequentialNoteListArgsSchema,
  SubjectFindManyArgsSchema,
  TagFindManyArgsSchema,
  TopicFindManyArgsSchema
} from "./chunk-YNCDDFUC.js";
import {
  IpynbCountOutputTypeArgsSchema
} from "./chunk-ERM5JPBF.js";
import {
  IpynbWhereUniqueInputSchema
} from "./chunk-TPNLH76D.js";

// src/database/outputTypeSchemas/IpynbUpdateArgsSchema.ts
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
var IpynbUpdateArgsSchema = z.object({
  select: IpynbSelectSchema.optional(),
  include: IpynbIncludeSchema.optional(),
  data: z.union([IpynbUpdateInputSchema, IpynbUncheckedUpdateInputSchema]),
  where: IpynbWhereUniqueInputSchema
}).strict();
var IpynbUpdateArgsSchema_default = IpynbUpdateArgsSchema;

export {
  IpynbSelectSchema,
  IpynbUpdateArgsSchema,
  IpynbUpdateArgsSchema_default
};
//# sourceMappingURL=chunk-OKV56EUK.js.map