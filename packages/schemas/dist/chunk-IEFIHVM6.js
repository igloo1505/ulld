import {
  GoogleCalendarAuthOrderByWithRelationInputSchema
} from "./chunk-ALUDGPKO.js";
import {
  GoogleCalendarAuthScalarFieldEnumSchema
} from "./chunk-4XBT6THF.js";
import {
  GoogleCalendarAuthWhereUniqueInputSchema
} from "./chunk-PJGNE4ZK.js";
import {
  GoogleCalendarAuthWhereInputSchema
} from "./chunk-JBN2LWOB.js";

// src/database/outputTypeSchemas/GoogleCalendarAuthFindFirstArgsSchema.ts
import { z } from "zod";
var GoogleCalendarAuthSelectSchema = z.object({
  id: z.boolean().optional(),
  auth: z.boolean().optional()
}).strict();
var GoogleCalendarAuthFindFirstArgsSchema = z.object({
  select: GoogleCalendarAuthSelectSchema.optional(),
  where: GoogleCalendarAuthWhereInputSchema.optional(),
  orderBy: z.union([GoogleCalendarAuthOrderByWithRelationInputSchema.array(), GoogleCalendarAuthOrderByWithRelationInputSchema]).optional(),
  cursor: GoogleCalendarAuthWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([GoogleCalendarAuthScalarFieldEnumSchema, GoogleCalendarAuthScalarFieldEnumSchema.array()]).optional()
}).strict();
var GoogleCalendarAuthFindFirstArgsSchema_default = GoogleCalendarAuthFindFirstArgsSchema;

export {
  GoogleCalendarAuthSelectSchema,
  GoogleCalendarAuthFindFirstArgsSchema,
  GoogleCalendarAuthFindFirstArgsSchema_default
};
//# sourceMappingURL=chunk-IEFIHVM6.js.map