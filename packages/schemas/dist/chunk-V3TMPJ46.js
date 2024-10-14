import {
  StringNullableFilterSchema
} from "./chunk-2AUFJPNJ.js";
import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";
import {
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

// src/database/inputTypeSchemas/ReadingListScalarWhereInputSchema.ts
import { z } from "zod";
var ReadingListScalarWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => ReadingListScalarWhereInputSchema), z.lazy(() => ReadingListScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => ReadingListScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReadingListScalarWhereInputSchema), z.lazy(() => ReadingListScalarWhereInputSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  lastUpdate: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
}).strict();
var ReadingListScalarWhereInputSchema_default = ReadingListScalarWhereInputSchema;

export {
  ReadingListScalarWhereInputSchema,
  ReadingListScalarWhereInputSchema_default
};
//# sourceMappingURL=chunk-V3TMPJ46.js.map