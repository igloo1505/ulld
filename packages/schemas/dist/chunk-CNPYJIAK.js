// src/database/inputTypeSchemas/KanBanCardCreateManyKanBanListInputSchema.ts
import { z } from "zod";
var KanBanCardCreateManyKanBanListInputSchema = z.object({
  id: z.number().int().optional(),
  indexWithinList: z.number().int(),
  label: z.string().optional().nullable(),
  details: z.string().optional().nullable()
}).strict();
var KanBanCardCreateManyKanBanListInputSchema_default = KanBanCardCreateManyKanBanListInputSchema;

export {
  KanBanCardCreateManyKanBanListInputSchema,
  KanBanCardCreateManyKanBanListInputSchema_default
};
//# sourceMappingURL=chunk-CNPYJIAK.js.map