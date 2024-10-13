// src/database/inputTypeSchemas/GoogleCalendarAuthUncheckedCreateInputSchema.ts
import { z } from "zod";
var GoogleCalendarAuthUncheckedCreateInputSchema = z.object({
  id: z.number().int().optional(),
  auth: z.string().optional().nullable()
}).strict();
var GoogleCalendarAuthUncheckedCreateInputSchema_default = GoogleCalendarAuthUncheckedCreateInputSchema;

export {
  GoogleCalendarAuthUncheckedCreateInputSchema,
  GoogleCalendarAuthUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-YNBOWMZ4.js.map