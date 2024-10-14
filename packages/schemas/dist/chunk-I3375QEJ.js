import {
  IntNullableFilterSchema
} from "./chunk-25XMO7OH.js";
import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";
import {
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

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
//# sourceMappingURL=chunk-I3375QEJ.js.map