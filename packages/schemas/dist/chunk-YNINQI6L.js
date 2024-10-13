import {
  BibEntryListRelationFilterSchema,
  EquationListRelationFilterSchema,
  IpynbListRelationFilterSchema,
  KanbanNullableRelationFilterSchema,
  KanbanWhereInputSchema,
  MdxNoteListRelationFilterSchema,
  PracticeExamListRelationFilterSchema,
  QAPairListRelationFilterSchema,
  SubjectWhereInputSchema,
  ToDoListListRelationFilterSchema,
  ToDoListRelationFilterSchema
} from "./chunk-XHIJ766H.js";
import {
  IntNullableFilterSchema
} from "./chunk-3VYZ2XCQ.js";
import {
  DateTimeFilterSchema
} from "./chunk-JHI3RHA5.js";

// src/database/inputTypeSchemas/SubjectWhereUniqueInputSchema.ts
import { z } from "zod";
var SubjectWhereUniqueInputSchema = z.object({
  value: z.string()
}).and(z.object({
  value: z.string().optional(),
  AND: z.union([z.lazy(() => SubjectWhereInputSchema), z.lazy(() => SubjectWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => SubjectWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => SubjectWhereInputSchema), z.lazy(() => SubjectWhereInputSchema).array()]).optional(),
  kanbanId: z.union([z.lazy(() => IntNullableFilterSchema), z.number().int()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  lastAccess: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  MdxNotes: z.lazy(() => MdxNoteListRelationFilterSchema).optional(),
  IpynbNotes: z.lazy(() => IpynbListRelationFilterSchema).optional(),
  QaPair: z.lazy(() => QAPairListRelationFilterSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamListRelationFilterSchema).optional(),
  Kanban: z.union([z.lazy(() => KanbanNullableRelationFilterSchema), z.lazy(() => KanbanWhereInputSchema)]).optional().nullable(),
  todoList: z.lazy(() => ToDoListListRelationFilterSchema).optional(),
  toDo: z.lazy(() => ToDoListRelationFilterSchema).optional(),
  bibEntries: z.lazy(() => BibEntryListRelationFilterSchema).optional(),
  equations: z.lazy(() => EquationListRelationFilterSchema).optional()
}).strict());
var SubjectWhereUniqueInputSchema_default = SubjectWhereUniqueInputSchema;

export {
  SubjectWhereUniqueInputSchema,
  SubjectWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-YNINQI6L.js.map