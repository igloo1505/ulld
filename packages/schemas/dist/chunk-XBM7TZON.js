import {
  KanBanListCreateManyKanbanInputSchema
} from "./chunk-7VL7W4VN.js";

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
//# sourceMappingURL=chunk-XBM7TZON.js.map