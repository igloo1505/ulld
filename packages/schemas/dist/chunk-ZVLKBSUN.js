// src/database/inputTypeSchemas/TimePeriodCreateWithoutDietInputSchema.ts
import { z } from "zod";
var TimePeriodCreateWithoutDietInputSchema = z.object({
  start: z.coerce.date().optional(),
  end: z.coerce.date().optional().nullable()
}).strict();
var TimePeriodCreateWithoutDietInputSchema_default = TimePeriodCreateWithoutDietInputSchema;

export {
  TimePeriodCreateWithoutDietInputSchema,
  TimePeriodCreateWithoutDietInputSchema_default
};
//# sourceMappingURL=chunk-ZVLKBSUN.js.map