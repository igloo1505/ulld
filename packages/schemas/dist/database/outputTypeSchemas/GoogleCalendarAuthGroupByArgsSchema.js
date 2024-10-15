import { z } from 'zod';
import { GoogleCalendarAuthWhereInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthWhereInputSchema.js';
import { GoogleCalendarAuthOrderByWithAggregationInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthOrderByWithAggregationInputSchema.js';
import { GoogleCalendarAuthScalarFieldEnumSchema } from '../inputTypeSchemas/GoogleCalendarAuthScalarFieldEnumSchema.js';
import { GoogleCalendarAuthScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthScalarWhereWithAggregatesInputSchema.js';
export const GoogleCalendarAuthGroupByArgsSchema = z.object({
    where: GoogleCalendarAuthWhereInputSchema.optional(),
    orderBy: z.union([GoogleCalendarAuthOrderByWithAggregationInputSchema.array(), GoogleCalendarAuthOrderByWithAggregationInputSchema]).optional(),
    by: GoogleCalendarAuthScalarFieldEnumSchema.array(),
    having: GoogleCalendarAuthScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default GoogleCalendarAuthGroupByArgsSchema;
