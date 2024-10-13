// src/database/modelSchema/SettingsAppendixSchema.ts
import { z } from "zod";
var SettingsAppendixSchema = z.object({
  id: z.string(),
  data: z.instanceof(Buffer),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date()
});
var SettingsAppendixPartialSchema = SettingsAppendixSchema.partial();
var SettingsAppendixSchema_default = SettingsAppendixSchema;

export {
  SettingsAppendixSchema,
  SettingsAppendixPartialSchema,
  SettingsAppendixSchema_default
};
//# sourceMappingURL=chunk-CUY6K2H3.js.map