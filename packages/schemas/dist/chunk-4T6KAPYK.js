import {
  SubjectUpdateManyWithoutKanbanNestedInputSchema,
  TagUpdateManyWithoutKanbanNestedInputSchema,
  TopicUpdateManyWithoutKanbanNestedInputSchema
} from "./chunk-2SDBTX3Y.js";
import {
  KanBanListUpdateManyWithoutKanbanNestedInputSchema
} from "./chunk-FDLRNLYM.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/KanbanUpdateInputSchema.ts
import { z } from "zod";
var KanbanUpdateInputSchema = z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lists: z.lazy(() => KanBanListUpdateManyWithoutKanbanNestedInputSchema).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutKanbanNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUpdateManyWithoutKanbanNestedInputSchema).optional(),
  topics: z.lazy(() => TopicUpdateManyWithoutKanbanNestedInputSchema).optional()
}).strict();
var KanbanUpdateInputSchema_default = KanbanUpdateInputSchema;

export {
  KanbanUpdateInputSchema,
  KanbanUpdateInputSchema_default
};
//# sourceMappingURL=chunk-4T6KAPYK.js.map