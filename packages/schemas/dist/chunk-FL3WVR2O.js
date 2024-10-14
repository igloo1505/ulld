import {
  IntNullableWithAggregatesFilterSchema
} from "./chunk-VKTRMAGB.js";
import {
  DateTimeWithAggregatesFilterSchema
} from "./chunk-XCQN6FNH.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-3OYDE7JL.js";

// src/database/inputTypeSchemas/SubjectScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var SubjectScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => SubjectScalarWhereWithAggregatesInputSchema), z.lazy(() => SubjectScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => SubjectScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => SubjectScalarWhereWithAggregatesInputSchema), z.lazy(() => SubjectScalarWhereWithAggregatesInputSchema).array()]).optional(),
  value: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  kanbanId: z.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  lastAccess: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
}).strict();
var SubjectScalarWhereWithAggregatesInputSchema_default = SubjectScalarWhereWithAggregatesInputSchema;

export {
  SubjectScalarWhereWithAggregatesInputSchema,
  SubjectScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-FL3WVR2O.js.map