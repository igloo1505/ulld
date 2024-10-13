import {
  BibEntryCreateNestedManyWithoutSubjectsInputSchema,
  EquationCreateNestedManyWithoutSubjectsInputSchema,
  IpynbCreateNestedManyWithoutSubjectsInputSchema,
  KanbanCreateNestedOneWithoutSubjectsInputSchema,
  MdxNoteCreateNestedManyWithoutSubjectsInputSchema,
  PracticeExamCreateNestedManyWithoutSubjectsInputSchema,
  QAPairCreateNestedManyWithoutSubjectsInputSchema,
  ToDoCreateNestedManyWithoutSubjectsInputSchema,
  ToDoListCreateNestedManyWithoutSubjectsInputSchema
} from "./chunk-JOZ37TAM.js";

// src/database/inputTypeSchemas/SubjectCreateInputSchema.ts
import { z } from "zod";
var SubjectCreateInputSchema = z.object({
  value: z.string(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  MdxNotes: z.lazy(() => MdxNoteCreateNestedManyWithoutSubjectsInputSchema).optional(),
  IpynbNotes: z.lazy(() => IpynbCreateNestedManyWithoutSubjectsInputSchema).optional(),
  QaPair: z.lazy(() => QAPairCreateNestedManyWithoutSubjectsInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamCreateNestedManyWithoutSubjectsInputSchema).optional(),
  Kanban: z.lazy(() => KanbanCreateNestedOneWithoutSubjectsInputSchema).optional(),
  todoList: z.lazy(() => ToDoListCreateNestedManyWithoutSubjectsInputSchema).optional(),
  toDo: z.lazy(() => ToDoCreateNestedManyWithoutSubjectsInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryCreateNestedManyWithoutSubjectsInputSchema).optional(),
  equations: z.lazy(() => EquationCreateNestedManyWithoutSubjectsInputSchema).optional()
}).strict();
var SubjectCreateInputSchema_default = SubjectCreateInputSchema;

export {
  SubjectCreateInputSchema,
  SubjectCreateInputSchema_default
};
//# sourceMappingURL=chunk-46DWKSII.js.map