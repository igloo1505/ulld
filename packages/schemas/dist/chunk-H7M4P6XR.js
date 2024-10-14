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
} from "./chunk-LSOXTUZL.js";
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
//# sourceMappingURL=chunk-H7M4P6XR.js.map