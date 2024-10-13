// src/database/inputTypeSchemas/SettingsAppendixCreateInputSchema.ts
import { z } from "zod";
var SettingsAppendixCreateInputSchema = z.object({
  id: z.string(),
  data: z.instanceof(Buffer),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
var SettingsAppendixCreateInputSchema_default = SettingsAppendixCreateInputSchema;

export {
  SettingsAppendixCreateInputSchema,
  SettingsAppendixCreateInputSchema_default
};
//# sourceMappingURL=chunk-GUWG5TC5.js.map