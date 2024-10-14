import {
  SubjectUncheckedUpdateManyWithoutKanbanNestedInputSchema,
  TagUncheckedUpdateManyWithoutKanbanNestedInputSchema,
  TopicUncheckedUpdateManyWithoutKanbanNestedInputSchema
} from "./chunk-5MUGYHMK.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/KanbanUncheckedUpdateWithoutListsInputSchema.ts
import { z } from "zod";
var KanbanUncheckedUpdateWithoutListsInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutKanbanNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedUpdateManyWithoutKanbanNestedInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedUpdateManyWithoutKanbanNestedInputSchema).optional()
}).strict();
var KanbanUncheckedUpdateWithoutListsInputSchema_default = KanbanUncheckedUpdateWithoutListsInputSchema;

export {
  KanbanUncheckedUpdateWithoutListsInputSchema,
  KanbanUncheckedUpdateWithoutListsInputSchema_default
};
//# sourceMappingURL=chunk-2JD2EYJY.js.map