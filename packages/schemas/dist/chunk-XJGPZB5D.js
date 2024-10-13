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
  IpynbOrderByWithRelationInputSchema
} from "./chunk-YHWJD5C7.js";
import {
  IpynbWhereUniqueInputSchema
} from "./chunk-TPNLH76D.js";
import {
  IpynbScalarFieldEnumSchema
} from "./chunk-OA4CNC6Z.js";
import {
  IpynbWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/IpynbFindFirstOrThrowArgsSchema.ts
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
var IpynbFindFirstOrThrowArgsSchema = z.object({
  select: IpynbSelectSchema.optional(),
  include: IpynbIncludeSchema.optional(),
  where: IpynbWhereInputSchema.optional(),
  orderBy: z.union([IpynbOrderByWithRelationInputSchema.array(), IpynbOrderByWithRelationInputSchema]).optional(),
  cursor: IpynbWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([IpynbScalarFieldEnumSchema, IpynbScalarFieldEnumSchema.array()]).optional()
}).strict();
var IpynbFindFirstOrThrowArgsSchema_default = IpynbFindFirstOrThrowArgsSchema;

export {
  IpynbSelectSchema,
  IpynbFindFirstOrThrowArgsSchema,
  IpynbFindFirstOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-XJGPZB5D.js.map