import {
  KanBanCardCreateManyKanBanListInputSchema
} from "./chunk-CNPYJIAK.js";

// src/database/inputTypeSchemas/KanBanCardCreateManyKanBanListInputEnvelopeSchema.ts
import { z } from "zod";
var KanBanCardCreateManyKanBanListInputEnvelopeSchema = z.object({
  data: z.union([z.lazy(() => KanBanCardCreateManyKanBanListInputSchema), z.lazy(() => KanBanCardCreateManyKanBanListInputSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var KanBanCardCreateManyKanBanListInputEnvelopeSchema_default = KanBanCardCreateManyKanBanListInputEnvelopeSchema;

export {
  KanBanCardCreateManyKanBanListInputEnvelopeSchema,
  KanBanCardCreateManyKanBanListInputEnvelopeSchema_default
};
//# sourceMappingURL=chunk-H4MTV5UF.js.map