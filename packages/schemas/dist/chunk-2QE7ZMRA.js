import {
  KanBanCardCreateNestedManyWithoutKanBanListInputSchema
} from "./chunk-P4FQO4ZD.js";

// src/database/inputTypeSchemas/KanBanListCreateWithoutKanbanInputSchema.ts
import { z } from "zod";
var KanBanListCreateWithoutKanbanInputSchema = z.object({
  indexWithinBoard: z.number().int(),
  title: z.string().optional().nullable(),
  cards: z.lazy(() => KanBanCardCreateNestedManyWithoutKanBanListInputSchema).optional()
}).strict();
var KanBanListCreateWithoutKanbanInputSchema_default = KanBanListCreateWithoutKanbanInputSchema;

export {
  KanBanListCreateWithoutKanbanInputSchema,
  KanBanListCreateWithoutKanbanInputSchema_default
};
//# sourceMappingURL=chunk-2QE7ZMRA.js.map