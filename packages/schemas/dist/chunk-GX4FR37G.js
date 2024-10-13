import {
  GoogleCalendarAuthWhereUniqueInputSchema
} from "./chunk-PJGNE4ZK.js";

// src/database/outputTypeSchemas/GoogleCalendarAuthFindUniqueOrThrowArgsSchema.ts
import { z } from "zod";
var GoogleCalendarAuthSelectSchema = z.object({
  id: z.boolean().optional(),
  auth: z.boolean().optional()
}).strict();
var GoogleCalendarAuthFindUniqueOrThrowArgsSchema = z.object({
  select: GoogleCalendarAuthSelectSchema.optional(),
  where: GoogleCalendarAuthWhereUniqueInputSchema
}).strict();
var GoogleCalendarAuthFindUniqueOrThrowArgsSchema_default = GoogleCalendarAuthFindUniqueOrThrowArgsSchema;

export {
  GoogleCalendarAuthSelectSchema,
  GoogleCalendarAuthFindUniqueOrThrowArgsSchema,
  GoogleCalendarAuthFindUniqueOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-GX4FR37G.js.map