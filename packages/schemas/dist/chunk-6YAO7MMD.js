import {
  GoogleCalendarAuthWhereUniqueInputSchema
} from "./chunk-5DVVRNLD.js";

// src/database/outputTypeSchemas/GoogleCalendarAuthDeleteArgsSchema.ts
import { z } from "zod";
var GoogleCalendarAuthSelectSchema = z.object({
  id: z.boolean().optional(),
  auth: z.boolean().optional()
}).strict();
var GoogleCalendarAuthDeleteArgsSchema = z.object({
  select: GoogleCalendarAuthSelectSchema.optional(),
  where: GoogleCalendarAuthWhereUniqueInputSchema
}).strict();
var GoogleCalendarAuthDeleteArgsSchema_default = GoogleCalendarAuthDeleteArgsSchema;

export {
  GoogleCalendarAuthSelectSchema,
  GoogleCalendarAuthDeleteArgsSchema,
  GoogleCalendarAuthDeleteArgsSchema_default
};
//# sourceMappingURL=chunk-6YAO7MMD.js.map