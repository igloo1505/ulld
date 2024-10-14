import {
  BibEntryUpdateManyWithoutTagsNestedInputSchema,
  EquationUpdateManyWithoutTagsNestedInputSchema,
  IpynbUpdateManyWithoutTagsNestedInputSchema,
  KanbanUpdateOneWithoutTagsNestedInputSchema,
  MdxNoteUpdateManyWithoutTagsNestedInputSchema,
  PracticeExamUpdateManyWithoutTagsNestedInputSchema,
  QAPairUpdateManyWithoutTagsNestedInputSchema,
  ToDoListUpdateManyWithoutTagsNestedInputSchema,
  ToDoUpdateManyWithoutTagsNestedInputSchema
} from "./chunk-5MUGYHMK.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/TagUpdateInputSchema.ts
import { z } from "zod";
var TagUpdateInputSchema = z.object({
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  MdxNotes: z.lazy(() => MdxNoteUpdateManyWithoutTagsNestedInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryUpdateManyWithoutTagsNestedInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbUpdateManyWithoutTagsNestedInputSchema).optional(),
  QAPair: z.lazy(() => QAPairUpdateManyWithoutTagsNestedInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamUpdateManyWithoutTagsNestedInputSchema).optional(),
  equations: z.lazy(() => EquationUpdateManyWithoutTagsNestedInputSchema).optional(),
  toDo: z.lazy(() => ToDoUpdateManyWithoutTagsNestedInputSchema).optional(),
  Kanban: z.lazy(() => KanbanUpdateOneWithoutTagsNestedInputSchema).optional(),
  todoList: z.lazy(() => ToDoListUpdateManyWithoutTagsNestedInputSchema).optional()
}).strict();
var TagUpdateInputSchema_default = TagUpdateInputSchema;

export {
  TagUpdateInputSchema,
  TagUpdateInputSchema_default
};
//# sourceMappingURL=chunk-T2ZKN2WY.js.map