// src/database/inputTypeSchemas/DailyFocusSelectSchema.ts
import { z } from "zod";
var DailyFocusSelectSchema = z.object({
  value: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var DailyFocusSelectSchema_default = DailyFocusSelectSchema;
export {
  DailyFocusSelectSchema,
  DailyFocusSelectSchema_default as default
};
//# sourceMappingURL=DailyFocusSelectSchema.js.map