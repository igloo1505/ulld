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
  IntFilterSchema
} from "./chunk-EMYNQWE7.js";
import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";
import {
  BytesFilterSchema
} from "./chunk-CGUG7AXK.js";
import {
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

// src/database/inputTypeSchemas/IpynbScalarWhereInputSchema.ts
import { z } from "zod";
var IpynbScalarWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => IpynbScalarWhereInputSchema), z.lazy(() => IpynbScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => IpynbScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => IpynbScalarWhereInputSchema), z.lazy(() => IpynbScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  rootRelativePath: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  isProtected: z.union([z.lazy(() => BoolNullableFilterSchema), z.boolean()]).optional().nullable(),
  title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  latexTitle: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  citationsListOrder: z.lazy(() => StringNullableListFilterSchema).optional(),
  importantValues: z.lazy(() => FloatNullableListFilterSchema).optional(),
  href: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  outgoingQuickLinks: z.lazy(() => StringNullableListFilterSchema).optional(),
  raw: z.union([z.lazy(() => BytesFilterSchema), z.instanceof(Buffer)]).optional(),
  sequentialKey: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  sequentialIndex: z.union([z.lazy(() => IntNullableFilterSchema), z.number()]).optional().nullable(),
  bookmarked: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  firstSync: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  lastSync: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  lastAccess: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
}).strict();
var IpynbScalarWhereInputSchema_default = IpynbScalarWhereInputSchema;

export {
  IpynbScalarWhereInputSchema,
  IpynbScalarWhereInputSchema_default
};
//# sourceMappingURL=chunk-VGIHZ2LG.js.map