import {
  StringNullableFilterSchema
} from "./chunk-2QBRQQJV.js";
import {
  DateTimeFilterSchema
} from "./chunk-JHI3RHA5.js";
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

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
//# sourceMappingURL=chunk-T3BT4DST.js.map