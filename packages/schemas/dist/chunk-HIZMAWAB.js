import {
  GoogleCalendarAuthOrderByWithRelationInputSchema
} from "./chunk-ALUDGPKO.js";
import {
  GoogleCalendarAuthWhereUniqueInputSchema
} from "./chunk-PJGNE4ZK.js";
import {
  GoogleCalendarAuthWhereInputSchema
} from "./chunk-JBN2LWOB.js";

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
//# sourceMappingURL=chunk-HIZMAWAB.js.map