// src/database/inputTypeSchemas/DailyFocusCreateManyInputSchema.ts
import { z } from "zod";
var DailyFocusCreateManyInputSchema = z.object({
  value: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
var DailyFocusCreateManyInputSchema_default = DailyFocusCreateManyInputSchema;

export {
  DailyFocusCreateManyInputSchema,
  DailyFocusCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-P7226WBK.js.map