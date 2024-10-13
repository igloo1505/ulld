// src/database/inputTypeSchemas/SettingsAppendixSelectSchema.ts
import { z } from "zod";
var SettingsAppendixSelectSchema = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
var SettingsAppendixSelectSchema_default = SettingsAppendixSelectSchema;
export {
  SettingsAppendixSelectSchema,
  SettingsAppendixSelectSchema_default as default
};
//# sourceMappingURL=SettingsAppendixSelectSchema.js.map