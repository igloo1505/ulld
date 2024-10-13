import {
  GoogleCalendarAuthUpdateInputSchema
} from "./chunk-P62FON36.js";
import {
  GoogleCalendarAuthUncheckedUpdateInputSchema
} from "./chunk-JDVH7QH4.js";
import {
  GoogleCalendarAuthWhereUniqueInputSchema
} from "./chunk-PJGNE4ZK.js";

// src/database/outputTypeSchemas/GoogleCalendarAuthUpdateArgsSchema.ts
import { z } from "zod";
var GoogleCalendarAuthSelectSchema = z.object({
  id: z.boolean().optional(),
  auth: z.boolean().optional()
}).strict();
var GoogleCalendarAuthUpdateArgsSchema = z.object({
  select: GoogleCalendarAuthSelectSchema.optional(),
  data: z.union([GoogleCalendarAuthUpdateInputSchema, GoogleCalendarAuthUncheckedUpdateInputSchema]),
  where: GoogleCalendarAuthWhereUniqueInputSchema
}).strict();
var GoogleCalendarAuthUpdateArgsSchema_default = GoogleCalendarAuthUpdateArgsSchema;

export {
  GoogleCalendarAuthSelectSchema,
  GoogleCalendarAuthUpdateArgsSchema,
  GoogleCalendarAuthUpdateArgsSchema_default
};
//# sourceMappingURL=chunk-RYIILNU5.js.map