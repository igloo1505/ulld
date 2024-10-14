import {
  MdxNoteUpdateManyWithoutToDoNestedInputSchema,
  SubjectUpdateManyWithoutToDoNestedInputSchema,
  TagUpdateManyWithoutToDoNestedInputSchema,
  ToDoListUpdateOneWithoutTasksNestedInputSchema,
  ToDoUpdateManyWithoutParentNestedInputSchema,
  ToDoUpdateOneWithoutChildNestedInputSchema,
  TopicUpdateManyWithoutToDoNestedInputSchema
} from "./chunk-5MUGYHMK.js";
import {
  NullableEnumTaskCategoryFieldUpdateOperationsInputSchema
} from "./chunk-Y5EUL3TW.js";
import {
  BoolFieldUpdateOperationsInputSchema
} from "./chunk-APCVB345.js";
import {
  NullableDateTimeFieldUpdateOperationsInputSchema
} from "./chunk-FYUHI5X3.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  TaskCategorySchema
} from "./chunk-T4CHWTHS.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

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
//# sourceMappingURL=chunk-PE5HTCQB.js.map