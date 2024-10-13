import {
  IntNullableFilterSchema
} from "./chunk-3VYZ2XCQ.js";
import {
  DateTimeFilterSchema
} from "./chunk-JHI3RHA5.js";
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

// src/database/inputTypeSchemas/SubjectScalarWhereInputSchema.ts
import { z } from "zod";
var SubjectScalarWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => SubjectScalarWhereInputSchema), z.lazy(() => SubjectScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => SubjectScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => SubjectScalarWhereInputSchema), z.lazy(() => SubjectScalarWhereInputSchema).array()]).optional(),
  value: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  kanbanId: z.union([z.lazy(() => IntNullableFilterSchema), z.number()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  lastAccess: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
}).strict();
var SubjectScalarWhereInputSchema_default = SubjectScalarWhereInputSchema;

export {
  SubjectScalarWhereInputSchema,
  SubjectScalarWhereInputSchema_default
};
//# sourceMappingURL=chunk-33GSTGNH.js.map