// src/database/inputTypeSchemas/GoogleCalendarAuthCreateInputSchema.ts
import { z } from "zod";
var GoogleCalendarAuthCreateInputSchema = z.object({
  id: z.number().int().optional(),
  auth: z.string().optional().nullable()
}).strict();
var GoogleCalendarAuthCreateInputSchema_default = GoogleCalendarAuthCreateInputSchema;

export {
  GoogleCalendarAuthCreateInputSchema,
  GoogleCalendarAuthCreateInputSchema_default
};
//# sourceMappingURL=chunk-GKWFDQDS.js.map