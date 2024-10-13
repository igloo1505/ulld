// src/database/inputTypeSchemas/CitationsGroupCreateWithoutEntriesInputSchema.ts
import { z } from "zod";
var CitationsGroupCreateWithoutEntriesInputSchema = z.object({
  name: z.string(),
  description: z.string().optional().nullable()
}).strict();
var CitationsGroupCreateWithoutEntriesInputSchema_default = CitationsGroupCreateWithoutEntriesInputSchema;

export {
  CitationsGroupCreateWithoutEntriesInputSchema,
  CitationsGroupCreateWithoutEntriesInputSchema_default
};
//# sourceMappingURL=chunk-OJZIAFSR.js.map