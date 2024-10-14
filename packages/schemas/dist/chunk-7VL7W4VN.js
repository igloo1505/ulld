// src/database/inputTypeSchemas/KanBanListCreateManyKanbanInputSchema.ts
import { z } from "zod";
var KanBanListCreateManyKanbanInputSchema = z.object({
  id: z.number().int().optional(),
  indexWithinBoard: z.number().int(),
  title: z.string().optional().nullable()
}).strict();
var KanBanListCreateManyKanbanInputSchema_default = KanBanListCreateManyKanbanInputSchema;

export {
  KanBanListCreateManyKanbanInputSchema,
  KanBanListCreateManyKanbanInputSchema_default
};
//# sourceMappingURL=chunk-7VL7W4VN.js.map