import {
  MdxNoteUncheckedUpdateManyWithoutToDoNestedInputSchema,
  SubjectUncheckedUpdateManyWithoutToDoNestedInputSchema,
  TagUncheckedUpdateManyWithoutToDoNestedInputSchema,
  ToDoUncheckedUpdateManyWithoutParentNestedInputSchema,
  TopicUncheckedUpdateManyWithoutToDoNestedInputSchema
} from "./chunk-2SDBTX3Y.js";
import {
  NullableEnumTaskCategoryFieldUpdateOperationsInputSchema
} from "./chunk-OHBN74MM.js";
import {
  BoolFieldUpdateOperationsInputSchema
} from "./chunk-RAFX4YSS.js";
import {
  NullableDateTimeFieldUpdateOperationsInputSchema
} from "./chunk-V2DB3NL6.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  NullableIntFieldUpdateOperationsInputSchema
} from "./chunk-SG2ZRBF2.js";
import {
  TaskCategorySchema
} from "./chunk-P4QLHEK4.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/ToDoUncheckedUpdateInputSchema.ts
import { z } from "zod";
var ToDoUncheckedUpdateInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  task: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  dueAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  details: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  parentId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  category: z.union([z.lazy(() => TaskCategorySchema), z.lazy(() => NullableEnumTaskCategoryFieldUpdateOperationsInputSchema)]).optional().nullable(),
  bookmarked: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  priority: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  toDoListId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  completedOn: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  associatedNotes: z.lazy(() => MdxNoteUncheckedUpdateManyWithoutToDoNestedInputSchema).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutToDoNestedInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedUpdateManyWithoutToDoNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedUpdateManyWithoutToDoNestedInputSchema).optional(),
  child: z.lazy(() => ToDoUncheckedUpdateManyWithoutParentNestedInputSchema).optional()
}).strict();
var ToDoUncheckedUpdateInputSchema_default = ToDoUncheckedUpdateInputSchema;

export {
  ToDoUncheckedUpdateInputSchema,
  ToDoUncheckedUpdateInputSchema_default
};
//# sourceMappingURL=chunk-TDH6IK46.js.map