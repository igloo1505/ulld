import {
  GoogleCalendarAuthUpdateInputSchema
} from "./chunk-SDSWJTRD.js";
import {
  GoogleCalendarAuthUncheckedUpdateInputSchema
} from "./chunk-NYPOJTFG.js";
import {
  GoogleCalendarAuthWhereUniqueInputSchema
} from "./chunk-5DVVRNLD.js";

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
//# sourceMappingURL=chunk-ZPMIAUWQ.js.map