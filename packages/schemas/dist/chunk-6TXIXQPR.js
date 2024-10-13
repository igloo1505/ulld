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
} from "./chunk-2SDBTX3Y.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

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
//# sourceMappingURL=chunk-6TXIXQPR.js.map