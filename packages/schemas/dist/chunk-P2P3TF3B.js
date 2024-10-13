import {
  TagCreateManyKanbanInputSchema
} from "./chunk-64JGL4EB.js";

// src/database/inputTypeSchemas/TagCreateManyKanbanInputEnvelopeSchema.ts
import { z } from "zod";
var TagCreateManyKanbanInputEnvelopeSchema = z.object({
  data: z.union([z.lazy(() => TagCreateManyKanbanInputSchema), z.lazy(() => TagCreateManyKanbanInputSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var TagCreateManyKanbanInputEnvelopeSchema_default = TagCreateManyKanbanInputEnvelopeSchema;

export {
  TagCreateManyKanbanInputEnvelopeSchema,
  TagCreateManyKanbanInputEnvelopeSchema_default
};
//# sourceMappingURL=chunk-P2P3TF3B.js.map