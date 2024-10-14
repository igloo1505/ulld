import {
  KanbanCreateNestedOneWithoutListsInputSchema
} from "./chunk-4MYB3G6J.js";

// src/database/inputTypeSchemas/KanBanListCreateWithoutCardsInputSchema.ts
import { z } from "zod";
var KanBanListCreateWithoutCardsInputSchema = z.object({
  indexWithinBoard: z.number().int(),
  title: z.string().optional().nullable(),
  Kanban: z.lazy(() => KanbanCreateNestedOneWithoutListsInputSchema).optional()
}).strict();
var KanBanListCreateWithoutCardsInputSchema_default = KanBanListCreateWithoutCardsInputSchema;

export {
  KanBanListCreateWithoutCardsInputSchema,
  KanBanListCreateWithoutCardsInputSchema_default
};
//# sourceMappingURL=chunk-FKPYXRCN.js.map