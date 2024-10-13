// src/database/inputTypeSchemas/TimePeriodUncheckedCreateWithoutDietInputSchema.ts
import { z } from "zod";
var TimePeriodUncheckedCreateWithoutDietInputSchema = z.object({
  id: z.number().int().optional(),
  start: z.coerce.date().optional(),
  end: z.coerce.date().optional().nullable()
}).strict();
var TimePeriodUncheckedCreateWithoutDietInputSchema_default = TimePeriodUncheckedCreateWithoutDietInputSchema;

export {
  TimePeriodUncheckedCreateWithoutDietInputSchema,
  TimePeriodUncheckedCreateWithoutDietInputSchema_default
};
//# sourceMappingURL=chunk-UQHMJYHV.js.map