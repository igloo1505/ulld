import {
  BibEntryUncheckedUpdateManyWithoutTagsNestedInputSchema,
  EquationUncheckedUpdateManyWithoutTagsNestedInputSchema,
  IpynbUncheckedUpdateManyWithoutTagsNestedInputSchema,
  MdxNoteUncheckedUpdateManyWithoutTagsNestedInputSchema,
  PracticeExamUncheckedUpdateManyWithoutTagsNestedInputSchema,
  QAPairUncheckedUpdateManyWithoutTagsNestedInputSchema,
  ToDoListUncheckedUpdateManyWithoutTagsNestedInputSchema,
  ToDoUncheckedUpdateManyWithoutTagsNestedInputSchema
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
//# sourceMappingURL=chunk-WLDICEWA.js.map