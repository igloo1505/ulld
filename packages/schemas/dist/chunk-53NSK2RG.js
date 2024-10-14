import {
  BibEntryUncheckedUpdateManyWithoutSubjectsNestedInputSchema,
  EquationUncheckedUpdateManyWithoutSubjectsNestedInputSchema,
  IpynbUncheckedUpdateManyWithoutSubjectsNestedInputSchema,
  MdxNoteUncheckedUpdateManyWithoutSubjectsNestedInputSchema,
  PracticeExamUncheckedUpdateManyWithoutSubjectsNestedInputSchema,
  QAPairUncheckedUpdateManyWithoutSubjectsNestedInputSchema,
  ToDoListUncheckedUpdateManyWithoutSubjectsNestedInputSchema,
  ToDoUncheckedUpdateManyWithoutSubjectsNestedInputSchema
} from "./chunk-5MUGYHMK.js";
import {
  NullableIntFieldUpdateOperationsInputSchema
} from "./chunk-7KFMTKWN.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

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
//# sourceMappingURL=chunk-53NSK2RG.js.map