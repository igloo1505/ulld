import {
  NestedEnumTaskCategoryNullableWithAggregatesFilterSchema
} from "./chunk-A3WXRJIM.js";
import {
  NestedEnumTaskCategoryNullableFilterSchema
} from "./chunk-4A6JCUBO.js";
import {
  TaskCategorySchema
} from "./chunk-T4CHWTHS.js";
import {
  NestedIntNullableFilterSchema
} from "./chunk-45PPNBUK.js";

// src/database/inputTypeSchemas/EnumTaskCategoryNullableWithAggregatesFilterSchema.ts
import { z } from "zod";
var EnumTaskCategoryNullableWithAggregatesFilterSchema = z.object({
  equals: z.lazy(() => TaskCategorySchema).optional().nullable(),
  in: z.lazy(() => TaskCategorySchema).array().optional().nullable(),
  notIn: z.lazy(() => TaskCategorySchema).array().optional().nullable(),
  not: z.union([z.lazy(() => TaskCategorySchema), z.lazy(() => NestedEnumTaskCategoryNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTaskCategoryNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTaskCategoryNullableFilterSchema).optional()
}).strict();
var EnumTaskCategoryNullableWithAggregatesFilterSchema_default = EnumTaskCategoryNullableWithAggregatesFilterSchema;

export {
  EnumTaskCategoryNullableWithAggregatesFilterSchema,
  EnumTaskCategoryNullableWithAggregatesFilterSchema_default
};
//# sourceMappingURL=chunk-TJD45Q2I.js.map