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
  FloatNullableFilterSchema
} from "./chunk-MDL32JOO.js";
import {
  BoolFilterSchema
} from "./chunk-K637VO4C.js";
import {
  StringNullableFilterSchema
} from "./chunk-2AUFJPNJ.js";
import {
  IntFilterSchema
} from "./chunk-EMYNQWE7.js";
import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";
import {
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

// src/database/inputTypeSchemas/MdxNoteScalarWhereInputSchema.ts
import { z } from "zod";
var MdxNoteScalarWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => MdxNoteScalarWhereInputSchema), z.lazy(() => MdxNoteScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => MdxNoteScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => MdxNoteScalarWhereInputSchema), z.lazy(() => MdxNoteScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  isProtected: z.union([z.lazy(() => BoolNullableFilterSchema), z.boolean()]).optional().nullable(),
  dietSummaryKey: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  latexTitle: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  rootRelativePath: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  noteType: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  formatted: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  summary: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  citationsListOrder: z.lazy(() => StringNullableListFilterSchema).optional(),
  importantValues: z.lazy(() => FloatNullableListFilterSchema).optional(),
  imageSrc: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  href: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  sequentialKey: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  sequentialIndex: z.union([z.lazy(() => FloatNullableFilterSchema), z.number()]).optional().nullable(),
  floatImages: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  remoteUrl: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  trackRemote: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  outgoingQuickLinks: z.lazy(() => StringNullableListFilterSchema).optional(),
  quickLink: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  bookmarked: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  firstSync: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  lastSync: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  lastAccess: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
}).strict();
var MdxNoteScalarWhereInputSchema_default = MdxNoteScalarWhereInputSchema;

export {
  MdxNoteScalarWhereInputSchema,
  MdxNoteScalarWhereInputSchema_default
};
//# sourceMappingURL=chunk-QMRNOYDH.js.map