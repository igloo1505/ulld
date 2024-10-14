// src/database/inputTypeSchemas/TimePeriodCreateManyInputSchema.ts
import { z } from "zod";
var TimePeriodCreateManyInputSchema = z.object({
  id: z.number().int().optional(),
  start: z.coerce.date().optional(),
  end: z.coerce.date().optional().nullable(),
  dietId: z.string().optional().nullable()
}).strict();
var TimePeriodCreateManyInputSchema_default = TimePeriodCreateManyInputSchema;

export {
  TimePeriodCreateManyInputSchema,
  TimePeriodCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-7WNTIKTF.js.map