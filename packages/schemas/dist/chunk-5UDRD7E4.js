import {
  GoogleCalendarAuthCreateInputSchema
} from "./chunk-ZSKZ7SZC.js";
import {
  GoogleCalendarAuthUncheckedCreateInputSchema
} from "./chunk-YNBOWMZ4.js";

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
//# sourceMappingURL=chunk-5UDRD7E4.js.map