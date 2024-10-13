import {
  KanBanListCreateNestedOneWithoutCardsInputSchema
} from "./chunk-MEWTLPQ4.js";

// src/database/inputTypeSchemas/KanBanCardCreateInputSchema.ts
import { z } from "zod";
var KanBanCardCreateInputSchema = z.object({
  indexWithinList: z.number().int(),
  label: z.string().optional().nullable(),
  details: z.string().optional().nullable(),
  KanBanList: z.lazy(() => KanBanListCreateNestedOneWithoutCardsInputSchema).optional()
}).strict();
var KanBanCardCreateInputSchema_default = KanBanCardCreateInputSchema;

export {
  KanBanCardCreateInputSchema,
  KanBanCardCreateInputSchema_default
};
//# sourceMappingURL=chunk-UFWGHIQD.js.map