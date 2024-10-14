import {
  BibEntryListRelationFilterSchema,
  IpynbWhereInputSchema,
  ReadingListListRelationFilterSchema,
  SequentialNoteListNullableRelationFilterSchema,
  SequentialNoteListWhereInputSchema,
  SubjectListRelationFilterSchema,
  TagListRelationFilterSchema,
  TopicListRelationFilterSchema
} from "./chunk-LSOXTUZL.js";
import {
  BoolNullableFilterSchema
} from "./chunk-O6F53QLE.js";
import {
  FloatNullableListFilterSchema
} from "./chunk-KLW7VRYK.js";
import {
  StringNullableListFilterSchema
} from "./chunk-7OQ35RBX.js";
import {
  IntNullableFilterSchema
} from "./chunk-25XMO7OH.js";
import {
  BoolFilterSchema
} from "./chunk-K637VO4C.js";
import {
  StringNullableFilterSchema
} from "./chunk-2AUFJPNJ.js";
import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";
import {
  BytesFilterSchema
} from "./chunk-CGUG7AXK.js";
import {
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

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
//# sourceMappingURL=chunk-NCWREB5M.js.map