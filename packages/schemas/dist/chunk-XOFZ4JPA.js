import {
  GoogleCalendarAuthScalarWhereWithAggregatesInputSchema
} from "./chunk-BWY44CZI.js";
import {
  GoogleCalendarAuthOrderByWithAggregationInputSchema
} from "./chunk-QQRVD7JN.js";
import {
  GoogleCalendarAuthScalarFieldEnumSchema
} from "./chunk-4JIK343P.js";
import {
  GoogleCalendarAuthWhereInputSchema
} from "./chunk-L4VQ3HR7.js";

// src/database/outputTypeSchemas/GoogleCalendarAuthGroupByArgsSchema.ts
import { z } from "zod";
var GoogleCalendarAuthGroupByArgsSchema = z.object({
  where: GoogleCalendarAuthWhereInputSchema.optional(),
  orderBy: z.union([GoogleCalendarAuthOrderByWithAggregationInputSchema.array(), GoogleCalendarAuthOrderByWithAggregationInputSchema]).optional(),
  by: GoogleCalendarAuthScalarFieldEnumSchema.array(),
  having: GoogleCalendarAuthScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var GoogleCalendarAuthGroupByArgsSchema_default = GoogleCalendarAuthGroupByArgsSchema;

export {
  GoogleCalendarAuthGroupByArgsSchema,
  GoogleCalendarAuthGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-XOFZ4JPA.js.map