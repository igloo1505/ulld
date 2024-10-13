// src/database/inputTypeSchemas/AutoSettingSelectSchema.ts
import { z } from "zod";
var AutoSettingSelectSchema = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  glob: z.boolean().optional(),
  value: z.boolean().optional()
}).strict();
var AutoSettingSelectSchema_default = AutoSettingSelectSchema;
export {
  AutoSettingSelectSchema,
  AutoSettingSelectSchema_default as default
};
//# sourceMappingURL=AutoSettingSelectSchema.js.map