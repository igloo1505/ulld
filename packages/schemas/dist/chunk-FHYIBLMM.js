import {
  BibEntryUncheckedUpdateManyWithoutTopicsNestedInputSchema,
  EquationUncheckedUpdateManyWithoutTopicsNestedInputSchema,
  IpynbUncheckedUpdateManyWithoutTopicsNestedInputSchema,
  MdxNoteUncheckedUpdateManyWithoutTopicsNestedInputSchema,
  PracticeExamUncheckedUpdateManyWithoutTopicsNestedInputSchema,
  QAPairUncheckedUpdateManyWithoutTopicsNestedInputSchema,
  ToDoListUncheckedUpdateManyWithoutTopicsNestedInputSchema,
  ToDoUncheckedUpdateManyWithoutTopicsNestedInputSchema
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

// src/database/inputTypeSchemas/TopicUncheckedUpdateInputSchema.ts
import { z } from "zod";
var TopicUncheckedUpdateInputSchema = z.object({
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  kanbanId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  MdxNotes: z.lazy(() => MdxNoteUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
  QAPair: z.lazy(() => QAPairUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
  toDo: z.lazy(() => ToDoUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
  todoList: z.lazy(() => ToDoListUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
  equations: z.lazy(() => EquationUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional()
}).strict();
var TopicUncheckedUpdateInputSchema_default = TopicUncheckedUpdateInputSchema;

export {
  TopicUncheckedUpdateInputSchema,
  TopicUncheckedUpdateInputSchema_default
};
//# sourceMappingURL=chunk-FHYIBLMM.js.map