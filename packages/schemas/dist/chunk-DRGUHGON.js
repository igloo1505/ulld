import {
  SubjectCreateInputSchema
} from "./chunk-46DWKSII.js";
import {
  SubjectUncheckedCreateInputSchema
} from "./chunk-MEU46CIT.js";
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

// src/database/outputTypeSchemas/SubjectCreateArgsSchema.ts
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
var SubjectCreateArgsSchema = z.object({
  select: SubjectSelectSchema.optional(),
  include: SubjectIncludeSchema.optional(),
  data: z.union([SubjectCreateInputSchema, SubjectUncheckedCreateInputSchema])
}).strict();
var SubjectCreateArgsSchema_default = SubjectCreateArgsSchema;

export {
  SubjectSelectSchema,
  SubjectCreateArgsSchema,
  SubjectCreateArgsSchema_default
};
//# sourceMappingURL=chunk-DRGUHGON.js.map