import {
  EnumTaskCategoryNullableFilterSchema
} from "./chunk-MQUITXZ7.js";
import {
  TaskCategorySchema
} from "./chunk-P4QLHEK4.js";
import {
  DateTimeNullableFilterSchema
} from "./chunk-GCZZHHO4.js";
import {
  IntNullableFilterSchema
} from "./chunk-3VYZ2XCQ.js";
import {
  BoolFilterSchema
} from "./chunk-SXFFRDDB.js";
import {
  StringNullableFilterSchema
} from "./chunk-2QBRQQJV.js";
import {
  IntFilterSchema
} from "./chunk-YWGZDUEP.js";
import {
  DateTimeFilterSchema
} from "./chunk-JHI3RHA5.js";
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

// src/database/inputTypeSchemas/ToDoScalarWhereInputSchema.ts
import { z } from "zod";
var ToDoScalarWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => ToDoScalarWhereInputSchema), z.lazy(() => ToDoScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => ToDoScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => ToDoScalarWhereInputSchema), z.lazy(() => ToDoScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  task: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  dueAt: z.union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()]).optional().nullable(),
  details: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  parentId: z.union([z.lazy(() => IntNullableFilterSchema), z.number()]).optional().nullable(),
  category: z.union([z.lazy(() => EnumTaskCategoryNullableFilterSchema), z.lazy(() => TaskCategorySchema)]).optional().nullable(),
  bookmarked: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  status: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  priority: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  toDoListId: z.union([z.lazy(() => IntNullableFilterSchema), z.number()]).optional().nullable(),
  completedOn: z.union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()]).optional().nullable()
}).strict();
var ToDoScalarWhereInputSchema_default = ToDoScalarWhereInputSchema;

export {
  ToDoScalarWhereInputSchema,
  ToDoScalarWhereInputSchema_default
};
//# sourceMappingURL=chunk-E5BSRQUM.js.map