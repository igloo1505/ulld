import {
  SubjectUncheckedUpdateManyWithoutKanbanNestedInputSchema,
  TagUncheckedUpdateManyWithoutKanbanNestedInputSchema,
  TopicUncheckedUpdateManyWithoutKanbanNestedInputSchema
} from "./chunk-2SDBTX3Y.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

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
//# sourceMappingURL=chunk-4CHYYD2M.js.map