import {
  GoogleCalendarAuthWhereUniqueInputSchema
} from "./chunk-PJGNE4ZK.js";

// src/database/outputTypeSchemas/GoogleCalendarAuthFindUniqueArgsSchema.ts
import { z } from "zod";
var GoogleCalendarAuthSelectSchema = z.object({
  id: z.boolean().optional(),
  auth: z.boolean().optional()
}).strict();
var GoogleCalendarAuthFindUniqueArgsSchema = z.object({
  select: GoogleCalendarAuthSelectSchema.optional(),
  where: GoogleCalendarAuthWhereUniqueInputSchema
}).strict();
var GoogleCalendarAuthFindUniqueArgsSchema_default = GoogleCalendarAuthFindUniqueArgsSchema;

export {
  GoogleCalendarAuthSelectSchema,
  GoogleCalendarAuthFindUniqueArgsSchema,
  GoogleCalendarAuthFindUniqueArgsSchema_default
};
//# sourceMappingURL=chunk-GRLIQVWQ.js.map