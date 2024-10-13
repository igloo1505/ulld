import {
  KanbanCreateNestedOneWithoutListsInputSchema
} from "./chunk-WOPNQPXB.js";
import {
  KanBanCardCreateNestedManyWithoutKanBanListInputSchema
} from "./chunk-P4FQO4ZD.js";

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
//# sourceMappingURL=chunk-W5YSE4DG.js.map