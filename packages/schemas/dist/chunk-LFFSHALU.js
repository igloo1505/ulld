// src/database/inputTypeSchemas/CitationsGroupCreateManyInputSchema.ts
import { z } from "zod";
var CitationsGroupCreateManyInputSchema = z.object({
  name: z.string(),
  description: z.string().optional().nullable()
}).strict();
var CitationsGroupCreateManyInputSchema_default = CitationsGroupCreateManyInputSchema;

export {
  CitationsGroupCreateManyInputSchema,
  CitationsGroupCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-LFFSHALU.js.map