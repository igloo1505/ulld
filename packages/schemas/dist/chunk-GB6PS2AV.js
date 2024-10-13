import {
  BoolNullableWithAggregatesFilterSchema
} from "./chunk-DYBXW2Z6.js";
import {
  FloatNullableWithAggregatesFilterSchema
} from "./chunk-KVVU27MX.js";
import {
  BoolWithAggregatesFilterSchema
} from "./chunk-ZZUY2PNT.js";
import {
  StringNullableWithAggregatesFilterSchema
} from "./chunk-PPWAMBJ5.js";
import {
  FloatNullableListFilterSchema
} from "./chunk-PDKEE5ZF.js";
import {
  StringNullableListFilterSchema
} from "./chunk-6ULEVKEC.js";
import {
  IntWithAggregatesFilterSchema
} from "./chunk-HDUCGDMF.js";
import {
  DateTimeWithAggregatesFilterSchema
} from "./chunk-ZR5SQAPI.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-Z5POB6WI.js";

// src/database/inputTypeSchemas/MdxNoteScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var MdxNoteScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => MdxNoteScalarWhereWithAggregatesInputSchema), z.lazy(() => MdxNoteScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => MdxNoteScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => MdxNoteScalarWhereWithAggregatesInputSchema), z.lazy(() => MdxNoteScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  isProtected: z.union([z.lazy(() => BoolNullableWithAggregatesFilterSchema), z.boolean()]).optional().nullable(),
  dietSummaryKey: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  latexTitle: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  rootRelativePath: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  noteType: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  formatted: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  summary: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  citationsListOrder: z.lazy(() => StringNullableListFilterSchema).optional(),
  importantValues: z.lazy(() => FloatNullableListFilterSchema).optional(),
  imageSrc: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  href: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  sequentialKey: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  sequentialIndex: z.union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()]).optional().nullable(),
  floatImages: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
  remoteUrl: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  trackRemote: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
  outgoingQuickLinks: z.lazy(() => StringNullableListFilterSchema).optional(),
  quickLink: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  bookmarked: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
  firstSync: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  lastSync: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  lastAccess: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
}).strict();
var MdxNoteScalarWhereWithAggregatesInputSchema_default = MdxNoteScalarWhereWithAggregatesInputSchema;

export {
  MdxNoteScalarWhereWithAggregatesInputSchema,
  MdxNoteScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-GB6PS2AV.js.map