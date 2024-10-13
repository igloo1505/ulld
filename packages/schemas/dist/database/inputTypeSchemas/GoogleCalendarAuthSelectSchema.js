// src/database/inputTypeSchemas/GoogleCalendarAuthSelectSchema.ts
import { z } from "zod";
var GoogleCalendarAuthSelectSchema = z.object({
  id: z.boolean().optional(),
  auth: z.boolean().optional()
}).strict();
var GoogleCalendarAuthSelectSchema_default = GoogleCalendarAuthSelectSchema;
export {
  GoogleCalendarAuthSelectSchema,
  GoogleCalendarAuthSelectSchema_default as default
};
//# sourceMappingURL=GoogleCalendarAuthSelectSchema.js.map