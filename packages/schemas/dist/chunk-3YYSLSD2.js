import {
  StringNullableWithAggregatesFilterSchema
} from "./chunk-BZ55PUI6.js";
import {
  DateTimeWithAggregatesFilterSchema
} from "./chunk-XCQN6FNH.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-3OYDE7JL.js";

// src/database/inputTypeSchemas/ReadingListScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var ReadingListScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => ReadingListScalarWhereWithAggregatesInputSchema), z.lazy(() => ReadingListScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => ReadingListScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReadingListScalarWhereWithAggregatesInputSchema), z.lazy(() => ReadingListScalarWhereWithAggregatesInputSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  lastUpdate: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
}).strict();
var ReadingListScalarWhereWithAggregatesInputSchema_default = ReadingListScalarWhereWithAggregatesInputSchema;

export {
  ReadingListScalarWhereWithAggregatesInputSchema,
  ReadingListScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-3YYSLSD2.js.map