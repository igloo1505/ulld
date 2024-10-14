import {
  GoogleCalendarAuthOrderByWithRelationInputSchema
} from "./chunk-L4QP5I3S.js";
import {
  GoogleCalendarAuthWhereUniqueInputSchema
} from "./chunk-5DVVRNLD.js";
import {
  GoogleCalendarAuthWhereInputSchema
} from "./chunk-L4VQ3HR7.js";

// src/database/outputTypeSchemas/GoogleCalendarAuthAggregateArgsSchema.ts
import { z } from "zod";
var GoogleCalendarAuthAggregateArgsSchema = z.object({
  where: GoogleCalendarAuthWhereInputSchema.optional(),
  orderBy: z.union([GoogleCalendarAuthOrderByWithRelationInputSchema.array(), GoogleCalendarAuthOrderByWithRelationInputSchema]).optional(),
  cursor: GoogleCalendarAuthWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var GoogleCalendarAuthAggregateArgsSchema_default = GoogleCalendarAuthAggregateArgsSchema;

export {
  GoogleCalendarAuthAggregateArgsSchema,
  GoogleCalendarAuthAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-HHWIBEZ2.js.map