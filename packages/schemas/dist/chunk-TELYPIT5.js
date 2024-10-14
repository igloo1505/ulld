// src/database/modelSchema/GoogleCalendarAuthSchema.ts
import { z } from "zod";
var GoogleCalendarAuthSchema = z.object({
  id: z.number().int(),
  auth: z.string().nullable()
});
var GoogleCalendarAuthPartialSchema = GoogleCalendarAuthSchema.partial();
var GoogleCalendarAuthSchema_default = GoogleCalendarAuthSchema;

export {
  GoogleCalendarAuthSchema,
  GoogleCalendarAuthPartialSchema,
  GoogleCalendarAuthSchema_default
};
//# sourceMappingURL=chunk-TELYPIT5.js.map