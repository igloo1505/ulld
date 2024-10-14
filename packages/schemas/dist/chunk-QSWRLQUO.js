import {
  EnumTaskCategoryNullableFilterSchema
} from "./chunk-O7PIU7VL.js";
import {
  TaskCategorySchema
} from "./chunk-T4CHWTHS.js";
import {
  DateTimeNullableFilterSchema
} from "./chunk-QHEDWAK6.js";
import {
  IntNullableFilterSchema
} from "./chunk-25XMO7OH.js";
import {
  BoolFilterSchema
} from "./chunk-K637VO4C.js";
import {
  StringNullableFilterSchema
} from "./chunk-2AUFJPNJ.js";
import {
  IntFilterSchema
} from "./chunk-EMYNQWE7.js";
import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";
import {
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

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
//# sourceMappingURL=chunk-QSWRLQUO.js.map