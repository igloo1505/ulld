// src/database/inputTypeSchemas/GoogleCalendarAuthCreateManyInputSchema.ts
import { z } from "zod";
var GoogleCalendarAuthCreateManyInputSchema = z.object({
  id: z.number().int().optional(),
  auth: z.string().optional().nullable()
}).strict();
var GoogleCalendarAuthCreateManyInputSchema_default = GoogleCalendarAuthCreateManyInputSchema;

export {
  GoogleCalendarAuthCreateManyInputSchema,
  GoogleCalendarAuthCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-PAHAUMI4.js.map