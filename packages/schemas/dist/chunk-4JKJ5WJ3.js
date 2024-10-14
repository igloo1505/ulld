import {
  TagCreateManyKanbanInputSchema
} from "./chunk-722JK5OC.js";

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
//# sourceMappingURL=chunk-4JKJ5WJ3.js.map