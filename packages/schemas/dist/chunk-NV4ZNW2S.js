import {
  BibEntryListRelationFilterSchema,
  EquationListRelationFilterSchema,
  IpynbListRelationFilterSchema,
  KanbanNullableRelationFilterSchema,
  KanbanWhereInputSchema,
  MdxNoteListRelationFilterSchema,
  PracticeExamListRelationFilterSchema,
  QAPairListRelationFilterSchema,
  ToDoListListRelationFilterSchema,
  ToDoListRelationFilterSchema,
  TopicWhereInputSchema
} from "./chunk-LSOXTUZL.js";
import {
  IntNullableFilterSchema
} from "./chunk-25XMO7OH.js";
import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";

// src/database/inputTypeSchemas/TopicWhereUniqueInputSchema.ts
import { z } from "zod";
var TopicWhereUniqueInputSchema = z.object({
  value: z.string()
}).and(z.object({
  value: z.string().optional(),
  AND: z.union([z.lazy(() => TopicWhereInputSchema), z.lazy(() => TopicWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => TopicWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => TopicWhereInputSchema), z.lazy(() => TopicWhereInputSchema).array()]).optional(),
  kanbanId: z.union([z.lazy(() => IntNullableFilterSchema), z.number().int()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  lastAccess: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  MdxNotes: z.lazy(() => MdxNoteListRelationFilterSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbListRelationFilterSchema).optional(),
  QAPair: z.lazy(() => QAPairListRelationFilterSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamListRelationFilterSchema).optional(),
  toDo: z.lazy(() => ToDoListRelationFilterSchema).optional(),
  Kanban: z.union([z.lazy(() => KanbanNullableRelationFilterSchema), z.lazy(() => KanbanWhereInputSchema)]).optional().nullable(),
  todoList: z.lazy(() => ToDoListListRelationFilterSchema).optional(),
  bibEntries: z.lazy(() => BibEntryListRelationFilterSchema).optional(),
  equations: z.lazy(() => EquationListRelationFilterSchema).optional()
}).strict());
var TopicWhereUniqueInputSchema_default = TopicWhereUniqueInputSchema;

export {
  TopicWhereUniqueInputSchema,
  TopicWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-NV4ZNW2S.js.map