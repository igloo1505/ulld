import {
  NestedEnumTaskCategoryNullableFilterSchema
} from "./chunk-LHZTXWMQ.js";
import {
  TaskCategorySchema
} from "./chunk-P4QLHEK4.js";
import {
  NestedIntNullableFilterSchema
} from "./chunk-QMPBSEPP.js";

// src/database/inputTypeSchemas/NestedEnumTaskCategoryNullableWithAggregatesFilterSchema.ts
import { z } from "zod";
var NestedEnumTaskCategoryNullableWithAggregatesFilterSchema = z.object({
  equals: z.lazy(() => TaskCategorySchema).optional().nullable(),
  in: z.lazy(() => TaskCategorySchema).array().optional().nullable(),
  notIn: z.lazy(() => TaskCategorySchema).array().optional().nullable(),
  not: z.union([z.lazy(() => TaskCategorySchema), z.lazy(() => NestedEnumTaskCategoryNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTaskCategoryNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTaskCategoryNullableFilterSchema).optional()
}).strict();
var NestedEnumTaskCategoryNullableWithAggregatesFilterSchema_default = NestedEnumTaskCategoryNullableWithAggregatesFilterSchema;

export {
  NestedEnumTaskCategoryNullableWithAggregatesFilterSchema,
  NestedEnumTaskCategoryNullableWithAggregatesFilterSchema_default
};
//# sourceMappingURL=chunk-S4LB45JA.js.map