import {
  GoogleCalendarAuthWhereUniqueInputSchema
} from "./chunk-PJGNE4ZK.js";

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
//# sourceMappingURL=chunk-3DCCSQXP.js.map