// src/database/modelSchema/DailyFocusSchema.ts
import { z } from "zod";
var DailyFocusSchema = z.object({
  value: z.string(),
  createdAt: z.coerce.date()
});
var DailyFocusPartialSchema = DailyFocusSchema.partial();
var DailyFocusSchema_default = DailyFocusSchema;

export {
  DailyFocusSchema,
  DailyFocusPartialSchema,
  DailyFocusSchema_default
};
//# sourceMappingURL=chunk-O5K3KCGV.js.map