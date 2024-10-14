// src/database/inputTypeSchemas/KanBanCardCreateWithoutKanBanListInputSchema.ts
import { z } from "zod";
var KanBanCardCreateWithoutKanBanListInputSchema = z.object({
  indexWithinList: z.number().int(),
  label: z.string().optional().nullable(),
  details: z.string().optional().nullable()
}).strict();
var KanBanCardCreateWithoutKanBanListInputSchema_default = KanBanCardCreateWithoutKanBanListInputSchema;

export {
  KanBanCardCreateWithoutKanBanListInputSchema,
  KanBanCardCreateWithoutKanBanListInputSchema_default
};
//# sourceMappingURL=chunk-5Z5OUN6K.js.map