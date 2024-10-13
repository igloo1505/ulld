import {
  BibEntryListRelationFilterSchema,
  IpynbWhereInputSchema,
  ReadingListListRelationFilterSchema,
  SequentialNoteListNullableRelationFilterSchema,
  SequentialNoteListWhereInputSchema,
  SubjectListRelationFilterSchema,
  TagListRelationFilterSchema,
  TopicListRelationFilterSchema
} from "./chunk-XHIJ766H.js";
import {
  BoolNullableFilterSchema
} from "./chunk-QYN6RJMK.js";
import {
  FloatNullableListFilterSchema
} from "./chunk-PDKEE5ZF.js";
import {
  StringNullableListFilterSchema
} from "./chunk-6ULEVKEC.js";
import {
  IntNullableFilterSchema
} from "./chunk-3VYZ2XCQ.js";
import {
  BoolFilterSchema
} from "./chunk-SXFFRDDB.js";
import {
  StringNullableFilterSchema
} from "./chunk-2QBRQQJV.js";
import {
  DateTimeFilterSchema
} from "./chunk-JHI3RHA5.js";
import {
  BytesFilterSchema
} from "./chunk-2FW6QR6Z.js";
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

// src/database/inputTypeSchemas/IpynbWhereUniqueInputSchema.ts
import { z } from "zod";
var IpynbWhereUniqueInputSchema = z.union([
  z.object({
    id: z.number().int(),
    rootRelativePath: z.string()
  }),
  z.object({
    id: z.number().int()
  }),
  z.object({
    rootRelativePath: z.string()
  })
]).and(z.object({
  id: z.number().int().optional(),
  rootRelativePath: z.string().optional(),
  AND: z.union([z.lazy(() => IpynbWhereInputSchema), z.lazy(() => IpynbWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => IpynbWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => IpynbWhereInputSchema), z.lazy(() => IpynbWhereInputSchema).array()]).optional(),
  isProtected: z.union([z.lazy(() => BoolNullableFilterSchema), z.boolean()]).optional().nullable(),
  title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  latexTitle: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  citationsListOrder: z.lazy(() => StringNullableListFilterSchema).optional(),
  importantValues: z.lazy(() => FloatNullableListFilterSchema).optional(),
  href: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  outgoingQuickLinks: z.lazy(() => StringNullableListFilterSchema).optional(),
  raw: z.union([z.lazy(() => BytesFilterSchema), z.instanceof(Buffer)]).optional(),
  sequentialKey: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  sequentialIndex: z.union([z.lazy(() => IntNullableFilterSchema), z.number().int()]).optional().nullable(),
  bookmarked: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  firstSync: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  lastSync: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  lastAccess: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  tags: z.lazy(() => TagListRelationFilterSchema).optional(),
  topics: z.lazy(() => TopicListRelationFilterSchema).optional(),
  subjects: z.lazy(() => SubjectListRelationFilterSchema).optional(),
  citations: z.lazy(() => BibEntryListRelationFilterSchema).optional(),
  sequentialList: z.union([z.lazy(() => SequentialNoteListNullableRelationFilterSchema), z.lazy(() => SequentialNoteListWhereInputSchema)]).optional().nullable(),
  readingList: z.lazy(() => ReadingListListRelationFilterSchema).optional()
}).strict());
var IpynbWhereUniqueInputSchema_default = IpynbWhereUniqueInputSchema;

export {
  IpynbWhereUniqueInputSchema,
  IpynbWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-TPNLH76D.js.map