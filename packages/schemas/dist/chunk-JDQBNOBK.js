import {
  SubjectCreateNestedManyWithoutKanbanInputSchema,
  TagCreateNestedManyWithoutKanbanInputSchema,
  TopicCreateNestedManyWithoutKanbanInputSchema
} from "./chunk-JOZ37TAM.js";

// src/database/inputTypeSchemas/KanbanCreateWithoutListsInputSchema.ts
import { z } from "zod";
var KanbanCreateWithoutListsInputSchema = z.object({
  title: z.string(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutKanbanInputSchema).optional(),
  subjects: z.lazy(() => SubjectCreateNestedManyWithoutKanbanInputSchema).optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutKanbanInputSchema).optional()
}).strict();
var KanbanCreateWithoutListsInputSchema_default = KanbanCreateWithoutListsInputSchema;

export {
  KanbanCreateWithoutListsInputSchema,
  KanbanCreateWithoutListsInputSchema_default
};
//# sourceMappingURL=chunk-JDQBNOBK.js.map