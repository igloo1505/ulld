import {
  SubjectUpdateManyWithoutKanbanNestedInputSchema,
  TagUpdateManyWithoutKanbanNestedInputSchema,
  TopicUpdateManyWithoutKanbanNestedInputSchema
} from "./chunk-2SDBTX3Y.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/KanbanUpdateWithoutListsInputSchema.ts
import { z } from "zod";
var KanbanUpdateWithoutListsInputSchema = z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutKanbanNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUpdateManyWithoutKanbanNestedInputSchema).optional(),
  topics: z.lazy(() => TopicUpdateManyWithoutKanbanNestedInputSchema).optional()
}).strict();
var KanbanUpdateWithoutListsInputSchema_default = KanbanUpdateWithoutListsInputSchema;

export {
  KanbanUpdateWithoutListsInputSchema,
  KanbanUpdateWithoutListsInputSchema_default
};
//# sourceMappingURL=chunk-6X624NPU.js.map