// src/database/inputTypeSchemas/KanBanListCreateManyInputSchema.ts
import { z } from "zod";
var KanBanListCreateManyInputSchema = z.object({
  id: z.number().int().optional(),
  indexWithinBoard: z.number().int(),
  title: z.string().optional().nullable(),
  boardId: z.number().int().optional().nullable()
}).strict();
var KanBanListCreateManyInputSchema_default = KanBanListCreateManyInputSchema;

export {
  KanBanListCreateManyInputSchema,
  KanBanListCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-KGXKIKBX.js.map