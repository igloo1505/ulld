import {
  NestedEnumTaskCategoryNullableFilterSchema
} from "./chunk-LHZTXWMQ.js";
import {
  TaskCategorySchema
} from "./chunk-P4QLHEK4.js";

// src/database/inputTypeSchemas/EnumTaskCategoryNullableFilterSchema.ts
import { z } from "zod";
var EnumTaskCategoryNullableFilterSchema = z.object({
  equals: z.lazy(() => TaskCategorySchema).optional().nullable(),
  in: z.lazy(() => TaskCategorySchema).array().optional().nullable(),
  notIn: z.lazy(() => TaskCategorySchema).array().optional().nullable(),
  not: z.union([z.lazy(() => TaskCategorySchema), z.lazy(() => NestedEnumTaskCategoryNullableFilterSchema)]).optional().nullable()
}).strict();
var EnumTaskCategoryNullableFilterSchema_default = EnumTaskCategoryNullableFilterSchema;

export {
  EnumTaskCategoryNullableFilterSchema,
  EnumTaskCategoryNullableFilterSchema_default
};
//# sourceMappingURL=chunk-MQUITXZ7.js.map