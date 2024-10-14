import {
  KanbanCreateNestedOneWithoutListsInputSchema
} from "./chunk-4MYB3G6J.js";
import {
  KanBanCardCreateNestedManyWithoutKanBanListInputSchema
} from "./chunk-VI6FQI6H.js";

// src/database/inputTypeSchemas/KanBanListCreateInputSchema.ts
import { z } from "zod";
var KanBanListCreateInputSchema = z.object({
  indexWithinBoard: z.number().int(),
  title: z.string().optional().nullable(),
  cards: z.lazy(() => KanBanCardCreateNestedManyWithoutKanBanListInputSchema).optional(),
  Kanban: z.lazy(() => KanbanCreateNestedOneWithoutListsInputSchema).optional()
}).strict();
var KanBanListCreateInputSchema_default = KanBanListCreateInputSchema;

export {
  KanBanListCreateInputSchema,
  KanBanListCreateInputSchema_default
};
//# sourceMappingURL=chunk-HZIREGBN.js.map