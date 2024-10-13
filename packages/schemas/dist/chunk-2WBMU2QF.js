import {
  BibEntryUncheckedUpdateManyWithoutTagsNestedInputSchema,
  EquationUncheckedUpdateManyWithoutTagsNestedInputSchema,
  IpynbUncheckedUpdateManyWithoutTagsNestedInputSchema,
  MdxNoteUncheckedUpdateManyWithoutTagsNestedInputSchema,
  PracticeExamUncheckedUpdateManyWithoutTagsNestedInputSchema,
  QAPairUncheckedUpdateManyWithoutTagsNestedInputSchema,
  ToDoListUncheckedUpdateManyWithoutTagsNestedInputSchema,
  ToDoUncheckedUpdateManyWithoutTagsNestedInputSchema
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

// src/database/inputTypeSchemas/TagUncheckedUpdateInputSchema.ts
import { z } from "zod";
var TagUncheckedUpdateInputSchema = z.object({
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  kanbanId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  MdxNotes: z.lazy(() => MdxNoteUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  QAPair: z.lazy(() => QAPairUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  equations: z.lazy(() => EquationUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  toDo: z.lazy(() => ToDoUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  todoList: z.lazy(() => ToDoListUncheckedUpdateManyWithoutTagsNestedInputSchema).optional()
}).strict();
var TagUncheckedUpdateInputSchema_default = TagUncheckedUpdateInputSchema;

export {
  TagUncheckedUpdateInputSchema,
  TagUncheckedUpdateInputSchema_default
};
//# sourceMappingURL=chunk-2WBMU2QF.js.map