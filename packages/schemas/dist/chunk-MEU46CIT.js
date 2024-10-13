import {
  BibEntryUncheckedCreateNestedManyWithoutSubjectsInputSchema,
  EquationUncheckedCreateNestedManyWithoutSubjectsInputSchema,
  IpynbUncheckedCreateNestedManyWithoutSubjectsInputSchema,
  MdxNoteUncheckedCreateNestedManyWithoutSubjectsInputSchema,
  PracticeExamUncheckedCreateNestedManyWithoutSubjectsInputSchema,
  QAPairUncheckedCreateNestedManyWithoutSubjectsInputSchema,
  ToDoListUncheckedCreateNestedManyWithoutSubjectsInputSchema,
  ToDoUncheckedCreateNestedManyWithoutSubjectsInputSchema
} from "./chunk-JOZ37TAM.js";

// src/database/inputTypeSchemas/SubjectUncheckedCreateInputSchema.ts
import { z } from "zod";
var SubjectUncheckedCreateInputSchema = z.object({
  value: z.string(),
  kanbanId: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  MdxNotes: z.lazy(() => MdxNoteUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  IpynbNotes: z.lazy(() => IpynbUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  QaPair: z.lazy(() => QAPairUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  todoList: z.lazy(() => ToDoListUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  toDo: z.lazy(() => ToDoUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  equations: z.lazy(() => EquationUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional()
}).strict();
var SubjectUncheckedCreateInputSchema_default = SubjectUncheckedCreateInputSchema;

export {
  SubjectUncheckedCreateInputSchema,
  SubjectUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-MEU46CIT.js.map