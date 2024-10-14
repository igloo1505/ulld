import {
  SubjectUncheckedCreateNestedManyWithoutKanbanInputSchema,
  TagUncheckedCreateNestedManyWithoutKanbanInputSchema,
  TopicUncheckedCreateNestedManyWithoutKanbanInputSchema
} from "./chunk-5QJWIG3K.js";

// src/database/inputTypeSchemas/KanbanUncheckedCreateWithoutListsInputSchema.ts
import { z } from "zod";
var KanbanUncheckedCreateWithoutListsInputSchema = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutKanbanInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedCreateNestedManyWithoutKanbanInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedCreateNestedManyWithoutKanbanInputSchema).optional()
}).strict();
var KanbanUncheckedCreateWithoutListsInputSchema_default = KanbanUncheckedCreateWithoutListsInputSchema;

export {
  KanbanUncheckedCreateWithoutListsInputSchema,
  KanbanUncheckedCreateWithoutListsInputSchema_default
};
//# sourceMappingURL=chunk-W4N7VV73.js.map