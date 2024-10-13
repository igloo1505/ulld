import {
  MdxNoteUpdateManyWithoutToDoNestedInputSchema,
  SubjectUpdateManyWithoutToDoNestedInputSchema,
  TagUpdateManyWithoutToDoNestedInputSchema,
  ToDoListUpdateOneWithoutTasksNestedInputSchema,
  ToDoUpdateManyWithoutParentNestedInputSchema,
  ToDoUpdateOneWithoutChildNestedInputSchema,
  TopicUpdateManyWithoutToDoNestedInputSchema
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

// src/database/inputTypeSchemas/ToDoUpdateInputSchema.ts
import { z } from "zod";
var ToDoUpdateInputSchema = z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  task: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  dueAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  details: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  category: z.union([z.lazy(() => TaskCategorySchema), z.lazy(() => NullableEnumTaskCategoryFieldUpdateOperationsInputSchema)]).optional().nullable(),
  bookmarked: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  priority: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  completedOn: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  associatedNotes: z.lazy(() => MdxNoteUpdateManyWithoutToDoNestedInputSchema).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutToDoNestedInputSchema).optional(),
  topics: z.lazy(() => TopicUpdateManyWithoutToDoNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUpdateManyWithoutToDoNestedInputSchema).optional(),
  parent: z.lazy(() => ToDoUpdateOneWithoutChildNestedInputSchema).optional(),
  child: z.lazy(() => ToDoUpdateManyWithoutParentNestedInputSchema).optional(),
  ToDoList: z.lazy(() => ToDoListUpdateOneWithoutTasksNestedInputSchema).optional()
}).strict();
var ToDoUpdateInputSchema_default = ToDoUpdateInputSchema;

export {
  ToDoUpdateInputSchema,
  ToDoUpdateInputSchema_default
};
//# sourceMappingURL=chunk-KRKGRWXJ.js.map