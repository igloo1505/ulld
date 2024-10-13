import {
  GoogleCalendarAuthScalarWhereWithAggregatesInputSchema
} from "./chunk-DEJPK25F.js";
import {
  GoogleCalendarAuthOrderByWithAggregationInputSchema
} from "./chunk-YQF4LGPK.js";
import {
  GoogleCalendarAuthScalarFieldEnumSchema
} from "./chunk-4XBT6THF.js";
import {
  GoogleCalendarAuthWhereInputSchema
} from "./chunk-JBN2LWOB.js";

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
//# sourceMappingURL=chunk-KNQIGGRL.js.map