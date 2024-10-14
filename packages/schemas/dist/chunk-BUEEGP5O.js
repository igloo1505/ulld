import {
  SubjectCreateNestedManyWithoutKanbanInputSchema,
  TagCreateNestedManyWithoutKanbanInputSchema,
  TopicCreateNestedManyWithoutKanbanInputSchema
} from "./chunk-5QJWIG3K.js";
import {
  KanBanListCreateNestedManyWithoutKanbanInputSchema
} from "./chunk-D5VVN2V3.js";

// src/database/inputTypeSchemas/KanbanCreateInputSchema.ts
import { z } from "zod";
var KanbanCreateInputSchema = z.object({
  title: z.string(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  lists: z.lazy(() => KanBanListCreateNestedManyWithoutKanbanInputSchema).optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutKanbanInputSchema).optional(),
  subjects: z.lazy(() => SubjectCreateNestedManyWithoutKanbanInputSchema).optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutKanbanInputSchema).optional()
}).strict();
var KanbanCreateInputSchema_default = KanbanCreateInputSchema;

export {
  KanbanCreateInputSchema,
  KanbanCreateInputSchema_default
};
//# sourceMappingURL=chunk-BUEEGP5O.js.map