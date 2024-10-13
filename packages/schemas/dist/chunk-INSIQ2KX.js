// src/database/inputTypeSchemas/DailyFocusUncheckedCreateInputSchema.ts
import { z } from "zod";
var DailyFocusUncheckedCreateInputSchema = z.object({
  value: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
var DailyFocusUncheckedCreateInputSchema_default = DailyFocusUncheckedCreateInputSchema;

export {
  DailyFocusUncheckedCreateInputSchema,
  DailyFocusUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-INSIQ2KX.js.map