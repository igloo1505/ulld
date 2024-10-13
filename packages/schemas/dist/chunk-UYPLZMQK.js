import {
  IntNullableWithAggregatesFilterSchema
} from "./chunk-IYE6XDHM.js";
import {
  DateTimeWithAggregatesFilterSchema
} from "./chunk-ZR5SQAPI.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-Z5POB6WI.js";

// src/database/inputTypeSchemas/TagScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var TagScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => TagScalarWhereWithAggregatesInputSchema), z.lazy(() => TagScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => TagScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => TagScalarWhereWithAggregatesInputSchema), z.lazy(() => TagScalarWhereWithAggregatesInputSchema).array()]).optional(),
  value: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  kanbanId: z.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  lastAccess: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
}).strict();
var TagScalarWhereWithAggregatesInputSchema_default = TagScalarWhereWithAggregatesInputSchema;

export {
  TagScalarWhereWithAggregatesInputSchema,
  TagScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-UYPLZMQK.js.map