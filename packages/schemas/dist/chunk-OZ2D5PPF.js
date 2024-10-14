import {
  SubjectUncheckedUpdateManyWithoutKanbanNestedInputSchema,
  TagUncheckedUpdateManyWithoutKanbanNestedInputSchema,
  TopicUncheckedUpdateManyWithoutKanbanNestedInputSchema
} from "./chunk-5MUGYHMK.js";
import {
  KanBanListUncheckedUpdateManyWithoutKanbanNestedInputSchema
} from "./chunk-QTNF7KYB.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

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
//# sourceMappingURL=chunk-OZ2D5PPF.js.map