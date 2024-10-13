// src/database/inputTypeSchemas/SettingsAppendixUncheckedCreateInputSchema.ts
import { z } from "zod";
var SettingsAppendixUncheckedCreateInputSchema = z.object({
  id: z.string(),
  data: z.instanceof(Buffer),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
var SettingsAppendixUncheckedCreateInputSchema_default = SettingsAppendixUncheckedCreateInputSchema;

export {
  SettingsAppendixUncheckedCreateInputSchema,
  SettingsAppendixUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-44PJQZKC.js.map