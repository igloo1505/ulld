import {
  TopicCreateManyKanbanInputSchema
} from "./chunk-SLWYHGXJ.js";

// src/database/inputTypeSchemas/TopicCreateManyKanbanInputEnvelopeSchema.ts
import { z } from "zod";
var TopicCreateManyKanbanInputEnvelopeSchema = z.object({
  data: z.union([z.lazy(() => TopicCreateManyKanbanInputSchema), z.lazy(() => TopicCreateManyKanbanInputSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var TopicCreateManyKanbanInputEnvelopeSchema_default = TopicCreateManyKanbanInputEnvelopeSchema;

export {
  TopicCreateManyKanbanInputEnvelopeSchema,
  TopicCreateManyKanbanInputEnvelopeSchema_default
};
//# sourceMappingURL=chunk-G4AFJMNS.js.map