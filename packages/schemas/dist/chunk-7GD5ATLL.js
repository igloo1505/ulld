import {
  BibEntryUpdateManyWithoutTopicsNestedInputSchema,
  EquationUpdateManyWithoutTopicsNestedInputSchema,
  IpynbUpdateManyWithoutTopicsNestedInputSchema,
  KanbanUpdateOneWithoutTopicsNestedInputSchema,
  MdxNoteUpdateManyWithoutTopicsNestedInputSchema,
  PracticeExamUpdateManyWithoutTopicsNestedInputSchema,
  QAPairUpdateManyWithoutTopicsNestedInputSchema,
  ToDoListUpdateManyWithoutTopicsNestedInputSchema,
  ToDoUpdateManyWithoutTopicsNestedInputSchema
} from "./chunk-2SDBTX3Y.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/TopicUpdateInputSchema.ts
import { z } from "zod";
var TopicUpdateInputSchema = z.object({
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  MdxNotes: z.lazy(() => MdxNoteUpdateManyWithoutTopicsNestedInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbUpdateManyWithoutTopicsNestedInputSchema).optional(),
  QAPair: z.lazy(() => QAPairUpdateManyWithoutTopicsNestedInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamUpdateManyWithoutTopicsNestedInputSchema).optional(),
  toDo: z.lazy(() => ToDoUpdateManyWithoutTopicsNestedInputSchema).optional(),
  Kanban: z.lazy(() => KanbanUpdateOneWithoutTopicsNestedInputSchema).optional(),
  todoList: z.lazy(() => ToDoListUpdateManyWithoutTopicsNestedInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryUpdateManyWithoutTopicsNestedInputSchema).optional(),
  equations: z.lazy(() => EquationUpdateManyWithoutTopicsNestedInputSchema).optional()
}).strict();
var TopicUpdateInputSchema_default = TopicUpdateInputSchema;

export {
  TopicUpdateInputSchema,
  TopicUpdateInputSchema_default
};
//# sourceMappingURL=chunk-7GD5ATLL.js.map