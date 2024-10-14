import {
  BibEntryListRelationFilterSchema,
  EquationListRelationFilterSchema,
  IpynbListRelationFilterSchema,
  KanbanNullableRelationFilterSchema,
  KanbanWhereInputSchema,
  MdxNoteListRelationFilterSchema,
  PracticeExamListRelationFilterSchema,
  QAPairListRelationFilterSchema,
  TagWhereInputSchema,
  ToDoListListRelationFilterSchema,
  ToDoListRelationFilterSchema
} from "./chunk-LSOXTUZL.js";
import {
  IntNullableFilterSchema
} from "./chunk-25XMO7OH.js";
import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";

// src/database/inputTypeSchemas/TagWhereUniqueInputSchema.ts
import { z } from "zod";
var TagWhereUniqueInputSchema = z.object({
  value: z.string()
}).and(z.object({
  value: z.string().optional(),
  AND: z.union([z.lazy(() => TagWhereInputSchema), z.lazy(() => TagWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => TagWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => TagWhereInputSchema), z.lazy(() => TagWhereInputSchema).array()]).optional(),
  kanbanId: z.union([z.lazy(() => IntNullableFilterSchema), z.number().int()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  lastAccess: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  MdxNotes: z.lazy(() => MdxNoteListRelationFilterSchema).optional(),
  bibEntries: z.lazy(() => BibEntryListRelationFilterSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbListRelationFilterSchema).optional(),
  QAPair: z.lazy(() => QAPairListRelationFilterSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamListRelationFilterSchema).optional(),
  equations: z.lazy(() => EquationListRelationFilterSchema).optional(),
  toDo: z.lazy(() => ToDoListRelationFilterSchema).optional(),
  Kanban: z.union([z.lazy(() => KanbanNullableRelationFilterSchema), z.lazy(() => KanbanWhereInputSchema)]).optional().nullable(),
  todoList: z.lazy(() => ToDoListListRelationFilterSchema).optional()
}).strict());
var TagWhereUniqueInputSchema_default = TagWhereUniqueInputSchema;

export {
  TagWhereUniqueInputSchema,
  TagWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-LMIV457O.js.map