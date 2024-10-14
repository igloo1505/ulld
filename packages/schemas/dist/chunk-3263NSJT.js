import {
  BoolNullableWithAggregatesFilterSchema
} from "./chunk-LOUCVNWL.js";
import {
  BoolWithAggregatesFilterSchema
} from "./chunk-YDWZQXJY.js";
import {
  StringNullableWithAggregatesFilterSchema
} from "./chunk-BZ55PUI6.js";
import {
  IntNullableWithAggregatesFilterSchema
} from "./chunk-VKTRMAGB.js";
import {
  FloatNullableListFilterSchema
} from "./chunk-KLW7VRYK.js";
import {
  StringNullableListFilterSchema
} from "./chunk-7OQ35RBX.js";
import {
  IntWithAggregatesFilterSchema
} from "./chunk-S2WAI7QC.js";
import {
  DateTimeWithAggregatesFilterSchema
} from "./chunk-XCQN6FNH.js";
import {
  BytesWithAggregatesFilterSchema
} from "./chunk-WNFCNG2A.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-3OYDE7JL.js";

// src/database/inputTypeSchemas/IpynbScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var IpynbScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => IpynbScalarWhereWithAggregatesInputSchema), z.lazy(() => IpynbScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => IpynbScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => IpynbScalarWhereWithAggregatesInputSchema), z.lazy(() => IpynbScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  rootRelativePath: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  isProtected: z.union([z.lazy(() => BoolNullableWithAggregatesFilterSchema), z.boolean()]).optional().nullable(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  latexTitle: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  citationsListOrder: z.lazy(() => StringNullableListFilterSchema).optional(),
  importantValues: z.lazy(() => FloatNullableListFilterSchema).optional(),
  href: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  outgoingQuickLinks: z.lazy(() => StringNullableListFilterSchema).optional(),
  raw: z.union([z.lazy(() => BytesWithAggregatesFilterSchema), z.instanceof(Buffer)]).optional(),
  sequentialKey: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  sequentialIndex: z.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()]).optional().nullable(),
  bookmarked: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
  firstSync: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  lastSync: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  lastAccess: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
}).strict();
var IpynbScalarWhereWithAggregatesInputSchema_default = IpynbScalarWhereWithAggregatesInputSchema;

export {
  IpynbScalarWhereWithAggregatesInputSchema,
  IpynbScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-3263NSJT.js.map