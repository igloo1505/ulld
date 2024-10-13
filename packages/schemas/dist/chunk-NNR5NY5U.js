import {
  GoogleCalendarAuthCreateInputSchema
} from "./chunk-ZSKZ7SZC.js";
import {
  GoogleCalendarAuthUncheckedCreateInputSchema
} from "./chunk-YNBOWMZ4.js";
import {
  GoogleCalendarAuthUpdateInputSchema
} from "./chunk-P62FON36.js";
import {
  GoogleCalendarAuthUncheckedUpdateInputSchema
} from "./chunk-JDVH7QH4.js";
import {
  GoogleCalendarAuthWhereUniqueInputSchema
} from "./chunk-PJGNE4ZK.js";

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
//# sourceMappingURL=chunk-NNR5NY5U.js.map