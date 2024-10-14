import {
  GoogleCalendarAuthCreateInputSchema
} from "./chunk-GKWFDQDS.js";
import {
  GoogleCalendarAuthUncheckedCreateInputSchema
} from "./chunk-IRKKYEOI.js";

// src/database/outputTypeSchemas/GoogleCalendarAuthCreateArgsSchema.ts
import { z } from "zod";
var GoogleCalendarAuthSelectSchema = z.object({
  id: z.boolean().optional(),
  auth: z.boolean().optional()
}).strict();
var GoogleCalendarAuthCreateArgsSchema = z.object({
  select: GoogleCalendarAuthSelectSchema.optional(),
  data: z.union([GoogleCalendarAuthCreateInputSchema, GoogleCalendarAuthUncheckedCreateInputSchema]).optional()
}).strict();
var GoogleCalendarAuthCreateArgsSchema_default = GoogleCalendarAuthCreateArgsSchema;

export {
  GoogleCalendarAuthSelectSchema,
  GoogleCalendarAuthCreateArgsSchema,
  GoogleCalendarAuthCreateArgsSchema_default
};
//# sourceMappingURL=chunk-ONOG4ZS7.js.map