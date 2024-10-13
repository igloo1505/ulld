// src/database/inputTypeSchemas/TopicCreateManyInputSchema.ts
import { z } from "zod";
var TopicCreateManyInputSchema = z.object({
  value: z.string(),
  kanbanId: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional()
}).strict();
var TopicCreateManyInputSchema_default = TopicCreateManyInputSchema;

export {
  TopicCreateManyInputSchema,
  TopicCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-IVXMQQEN.js.map