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
  IntFilterSchema
} from "./chunk-YWGZDUEP.js";
import {
  DateTimeFilterSchema
} from "./chunk-JHI3RHA5.js";
import {
  BytesFilterSchema
} from "./chunk-2FW6QR6Z.js";
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

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
//# sourceMappingURL=chunk-J6JKASW4.js.map