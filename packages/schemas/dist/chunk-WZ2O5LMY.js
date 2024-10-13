import {
  SubjectCreateManyKanbanInputSchema
} from "./chunk-SMN6J6ST.js";

// src/database/inputTypeSchemas/SubjectCreateManyKanbanInputEnvelopeSchema.ts
import { z } from "zod";
var SubjectCreateManyKanbanInputEnvelopeSchema = z.object({
  data: z.union([z.lazy(() => SubjectCreateManyKanbanInputSchema), z.lazy(() => SubjectCreateManyKanbanInputSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var SubjectCreateManyKanbanInputEnvelopeSchema_default = SubjectCreateManyKanbanInputEnvelopeSchema;

export {
  SubjectCreateManyKanbanInputEnvelopeSchema,
  SubjectCreateManyKanbanInputEnvelopeSchema_default
};
//# sourceMappingURL=chunk-WZ2O5LMY.js.map