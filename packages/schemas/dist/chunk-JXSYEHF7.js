import {
  SubjectUncheckedCreateNestedManyWithoutKanbanInputSchema,
  TagUncheckedCreateNestedManyWithoutKanbanInputSchema,
  TopicUncheckedCreateNestedManyWithoutKanbanInputSchema
} from "./chunk-5QJWIG3K.js";
import {
  KanBanListUncheckedCreateNestedManyWithoutKanbanInputSchema
} from "./chunk-F5N23XXL.js";

// src/database/inputTypeSchemas/KanbanUncheckedCreateInputSchema.ts
import { z } from "zod";
var KanbanUncheckedCreateInputSchema = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  lists: z.lazy(() => KanBanListUncheckedCreateNestedManyWithoutKanbanInputSchema).optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutKanbanInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedCreateNestedManyWithoutKanbanInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedCreateNestedManyWithoutKanbanInputSchema).optional()
}).strict();
var KanbanUncheckedCreateInputSchema_default = KanbanUncheckedCreateInputSchema;

export {
  KanbanUncheckedCreateInputSchema,
  KanbanUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-JXSYEHF7.js.map