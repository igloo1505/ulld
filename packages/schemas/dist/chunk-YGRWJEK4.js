// src/database/inputTypeSchemas/TimePeriodUncheckedCreateInputSchema.ts
import { z } from "zod";
var TimePeriodUncheckedCreateInputSchema = z.object({
  id: z.number().int().optional(),
  start: z.coerce.date().optional(),
  end: z.coerce.date().optional().nullable(),
  dietId: z.string().optional().nullable()
}).strict();
var TimePeriodUncheckedCreateInputSchema_default = TimePeriodUncheckedCreateInputSchema;

export {
  TimePeriodUncheckedCreateInputSchema,
  TimePeriodUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-YGRWJEK4.js.map