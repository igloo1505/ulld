import {
  KanBanListCreateManyKanbanInputSchema
} from "./chunk-72MZ7TKU.js";

// src/database/inputTypeSchemas/KanBanListCreateManyKanbanInputEnvelopeSchema.ts
import { z } from "zod";
var KanBanListCreateManyKanbanInputEnvelopeSchema = z.object({
  data: z.union([z.lazy(() => KanBanListCreateManyKanbanInputSchema), z.lazy(() => KanBanListCreateManyKanbanInputSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var KanBanListCreateManyKanbanInputEnvelopeSchema_default = KanBanListCreateManyKanbanInputEnvelopeSchema;

export {
  KanBanListCreateManyKanbanInputEnvelopeSchema,
  KanBanListCreateManyKanbanInputEnvelopeSchema_default
};
//# sourceMappingURL=chunk-TBQXSF4T.js.map