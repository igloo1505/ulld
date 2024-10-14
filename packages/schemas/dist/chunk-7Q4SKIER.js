// src/database/inputTypeSchemas/SettingsAppendixCreateManyInputSchema.ts
import { z } from "zod";
var SettingsAppendixCreateManyInputSchema = z.object({
  id: z.string(),
  data: z.instanceof(Buffer),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
var SettingsAppendixCreateManyInputSchema_default = SettingsAppendixCreateManyInputSchema;

export {
  SettingsAppendixCreateManyInputSchema,
  SettingsAppendixCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-7Q4SKIER.js.map