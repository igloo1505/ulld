import {
  NestedEnumTaskCategoryNullableWithAggregatesFilterSchema
} from "./chunk-S4LB45JA.js";
import {
  NestedEnumTaskCategoryNullableFilterSchema
} from "./chunk-LHZTXWMQ.js";
import {
  TaskCategorySchema
} from "./chunk-P4QLHEK4.js";
import {
  NestedIntNullableFilterSchema
} from "./chunk-QMPBSEPP.js";

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
//# sourceMappingURL=chunk-DJ62EGUF.js.map