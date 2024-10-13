import {
  BibEntryUncheckedUpdateManyWithoutSubjectsNestedInputSchema,
  EquationUncheckedUpdateManyWithoutSubjectsNestedInputSchema,
  IpynbUncheckedUpdateManyWithoutSubjectsNestedInputSchema,
  MdxNoteUncheckedUpdateManyWithoutSubjectsNestedInputSchema,
  PracticeExamUncheckedUpdateManyWithoutSubjectsNestedInputSchema,
  QAPairUncheckedUpdateManyWithoutSubjectsNestedInputSchema,
  ToDoListUncheckedUpdateManyWithoutSubjectsNestedInputSchema,
  ToDoUncheckedUpdateManyWithoutSubjectsNestedInputSchema
} from "./chunk-2SDBTX3Y.js";
import {
  NullableIntFieldUpdateOperationsInputSchema
} from "./chunk-SG2ZRBF2.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/SubjectUncheckedUpdateInputSchema.ts
import { z } from "zod";
var SubjectUncheckedUpdateInputSchema = z.object({
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  kanbanId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  MdxNotes: z.lazy(() => MdxNoteUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  IpynbNotes: z.lazy(() => IpynbUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  QaPair: z.lazy(() => QAPairUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  todoList: z.lazy(() => ToDoListUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  toDo: z.lazy(() => ToDoUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  equations: z.lazy(() => EquationUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional()
}).strict();
var SubjectUncheckedUpdateInputSchema_default = SubjectUncheckedUpdateInputSchema;

export {
  SubjectUncheckedUpdateInputSchema,
  SubjectUncheckedUpdateInputSchema_default
};
//# sourceMappingURL=chunk-MCCFOZ6M.js.map