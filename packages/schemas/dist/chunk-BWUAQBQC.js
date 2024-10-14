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
  IpynbOrderByWithRelationInputSchema
} from "./chunk-Y6EMIHNR.js";
import {
  IpynbWhereUniqueInputSchema
} from "./chunk-NCWREB5M.js";
import {
  IpynbScalarFieldEnumSchema
} from "./chunk-WKKJ2TT7.js";
import {
  IpynbWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-BWUAQBQC.js.map