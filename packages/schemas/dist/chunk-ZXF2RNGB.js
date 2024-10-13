// src/database/inputTypeSchemas/TagCreateManyInputSchema.ts
import { z } from "zod";
var TagCreateManyInputSchema = z.object({
  value: z.string(),
  kanbanId: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional()
}).strict();
var TagCreateManyInputSchema_default = TagCreateManyInputSchema;

export {
  TagCreateManyInputSchema,
  TagCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-ZXF2RNGB.js.map