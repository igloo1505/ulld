// src/database/inputTypeSchemas/ReadingListCreateManyInputSchema.ts
import { z } from "zod";
var ReadingListCreateManyInputSchema = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional()
}).strict();
var ReadingListCreateManyInputSchema_default = ReadingListCreateManyInputSchema;

export {
  ReadingListCreateManyInputSchema,
  ReadingListCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-PHSTJOWE.js.map