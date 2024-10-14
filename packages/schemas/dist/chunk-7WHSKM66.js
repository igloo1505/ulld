import {
  GoogleCalendarAuthCreateInputSchema
} from "./chunk-GKWFDQDS.js";
import {
  GoogleCalendarAuthUncheckedCreateInputSchema
} from "./chunk-IRKKYEOI.js";
import {
  GoogleCalendarAuthUpdateInputSchema
} from "./chunk-SDSWJTRD.js";
import {
  GoogleCalendarAuthUncheckedUpdateInputSchema
} from "./chunk-NYPOJTFG.js";
import {
  GoogleCalendarAuthWhereUniqueInputSchema
} from "./chunk-5DVVRNLD.js";

// src/database/outputTypeSchemas/GoogleCalendarAuthUpsertArgsSchema.ts
import { z } from "zod";
var GoogleCalendarAuthSelectSchema = z.object({
  id: z.boolean().optional(),
  auth: z.boolean().optional()
}).strict();
var GoogleCalendarAuthUpsertArgsSchema = z.object({
  select: GoogleCalendarAuthSelectSchema.optional(),
  where: GoogleCalendarAuthWhereUniqueInputSchema,
  create: z.union([GoogleCalendarAuthCreateInputSchema, GoogleCalendarAuthUncheckedCreateInputSchema]),
  update: z.union([GoogleCalendarAuthUpdateInputSchema, GoogleCalendarAuthUncheckedUpdateInputSchema])
}).strict();
var GoogleCalendarAuthUpsertArgsSchema_default = GoogleCalendarAuthUpsertArgsSchema;

export {
  GoogleCalendarAuthSelectSchema,
  GoogleCalendarAuthUpsertArgsSchema,
  GoogleCalendarAuthUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-7WHSKM66.js.map