import {
  SubjectUncheckedUpdateManyWithoutKanbanNestedInputSchema,
  TagUncheckedUpdateManyWithoutKanbanNestedInputSchema,
  TopicUncheckedUpdateManyWithoutKanbanNestedInputSchema
} from "./chunk-2SDBTX3Y.js";
import {
  KanBanListUncheckedUpdateManyWithoutKanbanNestedInputSchema
} from "./chunk-5SE5EX3C.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/KanbanUncheckedUpdateInputSchema.ts
import { z } from "zod";
var KanbanUncheckedUpdateInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lists: z.lazy(() => KanBanListUncheckedUpdateManyWithoutKanbanNestedInputSchema).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutKanbanNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedUpdateManyWithoutKanbanNestedInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedUpdateManyWithoutKanbanNestedInputSchema).optional()
}).strict();
var KanbanUncheckedUpdateInputSchema_default = KanbanUncheckedUpdateInputSchema;

export {
  KanbanUncheckedUpdateInputSchema,
  KanbanUncheckedUpdateInputSchema_default
};
//# sourceMappingURL=chunk-FVG4M2XG.js.map