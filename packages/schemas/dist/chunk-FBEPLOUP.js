import {
  EnumTaskCategoryNullableWithAggregatesFilterSchema
} from "./chunk-TJD45Q2I.js";
import {
  BoolWithAggregatesFilterSchema
} from "./chunk-YDWZQXJY.js";
import {
  DateTimeNullableWithAggregatesFilterSchema
} from "./chunk-CRFLRRUS.js";
import {
  StringNullableWithAggregatesFilterSchema
} from "./chunk-BZ55PUI6.js";
import {
  IntNullableWithAggregatesFilterSchema
} from "./chunk-VKTRMAGB.js";
import {
  TaskCategorySchema
} from "./chunk-T4CHWTHS.js";
import {
  IntWithAggregatesFilterSchema
} from "./chunk-S2WAI7QC.js";
import {
  DateTimeWithAggregatesFilterSchema
} from "./chunk-XCQN6FNH.js";
import {
  StringWithAggregatesFilterSchema
} from "./chunk-3OYDE7JL.js";

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
//# sourceMappingURL=chunk-FBEPLOUP.js.map