// src/database/inputTypeSchemas/DailyFocusCreateInputSchema.ts
import { z } from "zod";
var DailyFocusCreateInputSchema = z.object({
  value: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
var DailyFocusCreateInputSchema_default = DailyFocusCreateInputSchema;

export {
  DailyFocusCreateInputSchema,
  DailyFocusCreateInputSchema_default
};
//# sourceMappingURL=chunk-F7B42AGP.js.map