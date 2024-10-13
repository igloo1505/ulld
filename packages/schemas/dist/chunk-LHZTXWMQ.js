import {
  TaskCategorySchema
} from "./chunk-P4QLHEK4.js";

// src/database/inputTypeSchemas/NestedEnumTaskCategoryNullableFilterSchema.ts
import { z } from "zod";
var NestedEnumTaskCategoryNullableFilterSchema = z.object({
  equals: z.lazy(() => TaskCategorySchema).optional().nullable(),
  in: z.lazy(() => TaskCategorySchema).array().optional().nullable(),
  notIn: z.lazy(() => TaskCategorySchema).array().optional().nullable(),
  not: z.union([z.lazy(() => TaskCategorySchema), z.lazy(() => NestedEnumTaskCategoryNullableFilterSchema)]).optional().nullable()
}).strict();
var NestedEnumTaskCategoryNullableFilterSchema_default = NestedEnumTaskCategoryNullableFilterSchema;

export {
  NestedEnumTaskCategoryNullableFilterSchema,
  NestedEnumTaskCategoryNullableFilterSchema_default
};
//# sourceMappingURL=chunk-LHZTXWMQ.js.map