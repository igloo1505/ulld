import {
  IntNullableFilterSchema
} from "./chunk-3VYZ2XCQ.js";
import {
  DateTimeFilterSchema
} from "./chunk-JHI3RHA5.js";
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

// src/database/inputTypeSchemas/TagScalarWhereInputSchema.ts
import { z } from "zod";
var TagScalarWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => TagScalarWhereInputSchema), z.lazy(() => TagScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => TagScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => TagScalarWhereInputSchema), z.lazy(() => TagScalarWhereInputSchema).array()]).optional(),
  value: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  kanbanId: z.union([z.lazy(() => IntNullableFilterSchema), z.number()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  lastAccess: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
}).strict();
var TagScalarWhereInputSchema_default = TagScalarWhereInputSchema;

export {
  TagScalarWhereInputSchema,
  TagScalarWhereInputSchema_default
};
//# sourceMappingURL=chunk-3BM6ZQWW.js.map