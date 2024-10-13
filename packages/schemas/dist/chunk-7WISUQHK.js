import {
  MdxNoteListRelationFilterSchema,
  SubjectListRelationFilterSchema,
  TagListRelationFilterSchema,
  ToDoListNullableRelationFilterSchema,
  ToDoListRelationFilterSchema,
  ToDoListWhereInputSchema,
  ToDoNullableRelationFilterSchema,
  ToDoWhereInputSchema,
  TopicListRelationFilterSchema
} from "./chunk-XHIJ766H.js";
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

// src/database/inputTypeSchemas/ToDoWhereUniqueInputSchema.ts
import { z } from "zod";
var ToDoWhereUniqueInputSchema = z.object({
  id: z.number().int()
}).and(z.object({
  id: z.number().int().optional(),
  AND: z.union([z.lazy(() => ToDoWhereInputSchema), z.lazy(() => ToDoWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => ToDoWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => ToDoWhereInputSchema), z.lazy(() => ToDoWhereInputSchema).array()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  task: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  dueAt: z.union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()]).optional().nullable(),
  details: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  parentId: z.union([z.lazy(() => IntNullableFilterSchema), z.number().int()]).optional().nullable(),
  category: z.union([z.lazy(() => EnumTaskCategoryNullableFilterSchema), z.lazy(() => TaskCategorySchema)]).optional().nullable(),
  bookmarked: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  status: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  priority: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
  toDoListId: z.union([z.lazy(() => IntNullableFilterSchema), z.number().int()]).optional().nullable(),
  completedOn: z.union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()]).optional().nullable(),
  associatedNotes: z.lazy(() => MdxNoteListRelationFilterSchema).optional(),
  tags: z.lazy(() => TagListRelationFilterSchema).optional(),
  topics: z.lazy(() => TopicListRelationFilterSchema).optional(),
  subjects: z.lazy(() => SubjectListRelationFilterSchema).optional(),
  parent: z.union([z.lazy(() => ToDoNullableRelationFilterSchema), z.lazy(() => ToDoWhereInputSchema)]).optional().nullable(),
  child: z.lazy(() => ToDoListRelationFilterSchema).optional(),
  ToDoList: z.union([z.lazy(() => ToDoListNullableRelationFilterSchema), z.lazy(() => ToDoListWhereInputSchema)]).optional().nullable()
}).strict());
var ToDoWhereUniqueInputSchema_default = ToDoWhereUniqueInputSchema;

export {
  ToDoWhereUniqueInputSchema,
  ToDoWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-7WISUQHK.js.map