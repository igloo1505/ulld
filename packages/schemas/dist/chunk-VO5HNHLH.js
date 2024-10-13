import {
  EnumTaskCategoryNullableWithAggregatesFilterSchema
} from "./chunk-DJ62EGUF.js";
import {
  BoolWithAggregatesFilterSchema
} from "./chunk-ZZUY2PNT.js";
import {
  DateTimeNullableWithAggregatesFilterSchema
} from "./chunk-XC5DHP6E.js";
import {
  StringNullableWithAggregatesFilterSchema
} from "./chunk-PPWAMBJ5.js";
import {
  IntNullableWithAggregatesFilterSchema
} from "./chunk-IYE6XDHM.js";
import {
  TaskCategorySchema
} from "./chunk-P4QLHEK4.js";
import {
  IntWithAggregatesFilterSchema
} from "./chunk-HDUCGDMF.js";
import {
  DateTimeWithAggregatesFilterSchema
} from "./chunk-ZR5SQAPI.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-Z5POB6WI.js";

// src/database/inputTypeSchemas/ToDoScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var ToDoScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => ToDoScalarWhereWithAggregatesInputSchema), z.lazy(() => ToDoScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => ToDoScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => ToDoScalarWhereWithAggregatesInputSchema), z.lazy(() => ToDoScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  task: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  dueAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()]).optional().nullable(),
  details: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  parentId: z.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()]).optional().nullable(),
  category: z.union([z.lazy(() => EnumTaskCategoryNullableWithAggregatesFilterSchema), z.lazy(() => TaskCategorySchema)]).optional().nullable(),
  bookmarked: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
  status: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  priority: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  toDoListId: z.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()]).optional().nullable(),
  completedOn: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()]).optional().nullable()
}).strict();
var ToDoScalarWhereWithAggregatesInputSchema_default = ToDoScalarWhereWithAggregatesInputSchema;

export {
  ToDoScalarWhereWithAggregatesInputSchema,
  ToDoScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-VO5HNHLH.js.map