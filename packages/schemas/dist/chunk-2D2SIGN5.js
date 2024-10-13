import {
  BibEntryUpdateManyWithoutSubjectsNestedInputSchema,
  EquationUpdateManyWithoutSubjectsNestedInputSchema,
  IpynbUpdateManyWithoutSubjectsNestedInputSchema,
  KanbanUpdateOneWithoutSubjectsNestedInputSchema,
  MdxNoteUpdateManyWithoutSubjectsNestedInputSchema,
  PracticeExamUpdateManyWithoutSubjectsNestedInputSchema,
  QAPairUpdateManyWithoutSubjectsNestedInputSchema,
  ToDoListUpdateManyWithoutSubjectsNestedInputSchema,
  ToDoUpdateManyWithoutSubjectsNestedInputSchema
} from "./chunk-2SDBTX3Y.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/SubjectUpdateInputSchema.ts
import { z } from "zod";
var SubjectUpdateInputSchema = z.object({
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  MdxNotes: z.lazy(() => MdxNoteUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  IpynbNotes: z.lazy(() => IpynbUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  QaPair: z.lazy(() => QAPairUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  Kanban: z.lazy(() => KanbanUpdateOneWithoutSubjectsNestedInputSchema).optional(),
  todoList: z.lazy(() => ToDoListUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  toDo: z.lazy(() => ToDoUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  equations: z.lazy(() => EquationUpdateManyWithoutSubjectsNestedInputSchema).optional()
}).strict();
var SubjectUpdateInputSchema_default = SubjectUpdateInputSchema;

export {
  SubjectUpdateInputSchema,
  SubjectUpdateInputSchema_default
};
//# sourceMappingURL=chunk-2D2SIGN5.js.map