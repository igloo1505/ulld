import {
  GoogleCalendarAuthOrderByWithRelationInputSchema
} from "./chunk-L4QP5I3S.js";
import {
  GoogleCalendarAuthScalarFieldEnumSchema
} from "./chunk-4JIK343P.js";
import {
  GoogleCalendarAuthWhereUniqueInputSchema
} from "./chunk-5DVVRNLD.js";
import {
  GoogleCalendarAuthWhereInputSchema
} from "./chunk-L4VQ3HR7.js";

// src/database/outputTypeSchemas/GoogleCalendarAuthFindManyArgsSchema.ts
import { z } from "zod";
var GoogleCalendarAuthSelectSchema = z.object({
  id: z.boolean().optional(),
  auth: z.boolean().optional()
}).strict();
var GoogleCalendarAuthFindManyArgsSchema = z.object({
  select: GoogleCalendarAuthSelectSchema.optional(),
  where: GoogleCalendarAuthWhereInputSchema.optional(),
  orderBy: z.union([GoogleCalendarAuthOrderByWithRelationInputSchema.array(), GoogleCalendarAuthOrderByWithRelationInputSchema]).optional(),
  cursor: GoogleCalendarAuthWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([GoogleCalendarAuthScalarFieldEnumSchema, GoogleCalendarAuthScalarFieldEnumSchema.array()]).optional()
}).strict();
var GoogleCalendarAuthFindManyArgsSchema_default = GoogleCalendarAuthFindManyArgsSchema;

export {
  GoogleCalendarAuthSelectSchema,
  GoogleCalendarAuthFindManyArgsSchema,
  GoogleCalendarAuthFindManyArgsSchema_default
};
//# sourceMappingURL=chunk-IYRW777P.js.map