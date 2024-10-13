// src/database/inputTypeSchemas/TimePeriodCreateManyDietInputSchema.ts
import { z } from "zod";
var TimePeriodCreateManyDietInputSchema = z.object({
  id: z.number().int().optional(),
  start: z.coerce.date().optional(),
  end: z.coerce.date().optional().nullable()
}).strict();
var TimePeriodCreateManyDietInputSchema_default = TimePeriodCreateManyDietInputSchema;

export {
  TimePeriodCreateManyDietInputSchema,
  TimePeriodCreateManyDietInputSchema_default
};
//# sourceMappingURL=chunk-53EZGVZV.js.map