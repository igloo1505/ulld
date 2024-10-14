import {
  SubjectUncheckedUpdateInputSchema
} from "./chunk-53NSK2RG.js";
import {
  SubjectUpdateInputSchema
} from "./chunk-KZM2Z5I4.js";
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
} from "./chunk-JV52BDQC.js";
import {
  SubjectCountOutputTypeArgsSchema
} from "./chunk-5IJIZO25.js";
import {
  SubjectWhereUniqueInputSchema
} from "./chunk-CMHE62EJ.js";

// src/database/outputTypeSchemas/SubjectUpdateArgsSchema.ts
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
var SubjectUpdateArgsSchema = z.object({
  select: SubjectSelectSchema.optional(),
  include: SubjectIncludeSchema.optional(),
  data: z.union([SubjectUpdateInputSchema, SubjectUncheckedUpdateInputSchema]),
  where: SubjectWhereUniqueInputSchema
}).strict();
var SubjectUpdateArgsSchema_default = SubjectUpdateArgsSchema;

export {
  SubjectSelectSchema,
  SubjectUpdateArgsSchema,
  SubjectUpdateArgsSchema_default
};
//# sourceMappingURL=chunk-WE65TDUT.js.map