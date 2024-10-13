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
} from "./chunk-XHIJ766H.js";
import {
  IntNullableFilterSchema
} from "./chunk-3VYZ2XCQ.js";
import {
  DateTimeFilterSchema
} from "./chunk-JHI3RHA5.js";

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
//# sourceMappingURL=chunk-B6NNLS3H.js.map