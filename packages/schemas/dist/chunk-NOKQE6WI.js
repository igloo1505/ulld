import {
  BibEntryFindManyArgsSchema,
  EquationFindManyArgsSchema,
  IpynbFindManyArgsSchema,
  KanbanArgsSchema,
  MdxNoteFindManyArgsSchema,
  PracticeExamFindManyArgsSchema,
  QAPairFindManyArgsSchema,
  SubjectIncludeSchema,
  ToDoFindManyArgsSchema,
  ToDoListFindManyArgsSchema
} from "./chunk-YNCDDFUC.js";
import {
  SubjectCountOutputTypeArgsSchema
} from "./chunk-BG6T3O2I.js";
import {
  SubjectWhereUniqueInputSchema
} from "./chunk-YNINQI6L.js";

// src/database/outputTypeSchemas/SubjectFindUniqueOrThrowArgsSchema.ts
import { z } from "zod";
var SubjectSelectSchema = z.object({
  value: z.boolean().optional(),
  kanbanId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  lastAccess: z.boolean().optional(),
  MdxNotes: z.union([z.boolean(), z.lazy(() => MdxNoteFindManyArgsSchema)]).optional(),
  IpynbNotes: z.union([z.boolean(), z.lazy(() => IpynbFindManyArgsSchema)]).optional(),
  QaPair: z.union([z.boolean(), z.lazy(() => QAPairFindManyArgsSchema)]).optional(),
  practiceExam: z.union([z.boolean(), z.lazy(() => PracticeExamFindManyArgsSchema)]).optional(),
  Kanban: z.union([z.boolean(), z.lazy(() => KanbanArgsSchema)]).optional(),
  todoList: z.union([z.boolean(), z.lazy(() => ToDoListFindManyArgsSchema)]).optional(),
  toDo: z.union([z.boolean(), z.lazy(() => ToDoFindManyArgsSchema)]).optional(),
  bibEntries: z.union([z.boolean(), z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  equations: z.union([z.boolean(), z.lazy(() => EquationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SubjectCountOutputTypeArgsSchema)]).optional()
}).strict();
var SubjectFindUniqueOrThrowArgsSchema = z.object({
  select: SubjectSelectSchema.optional(),
  include: SubjectIncludeSchema.optional(),
  where: SubjectWhereUniqueInputSchema
}).strict();
var SubjectFindUniqueOrThrowArgsSchema_default = SubjectFindUniqueOrThrowArgsSchema;

export {
  SubjectSelectSchema,
  SubjectFindUniqueOrThrowArgsSchema,
  SubjectFindUniqueOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-NOKQE6WI.js.map