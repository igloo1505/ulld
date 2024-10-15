import { z } from 'zod';
import { GoogleCalendarAuthWhereInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthWhereInputSchema.js';
import { GoogleCalendarAuthOrderByWithRelationInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthOrderByWithRelationInputSchema.js';
import { GoogleCalendarAuthWhereUniqueInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthWhereUniqueInputSchema.js';
export const GoogleCalendarAuthAggregateArgsSchema = z.object({
    where: GoogleCalendarAuthWhereInputSchema.optional(),
    orderBy: z.union([GoogleCalendarAuthOrderByWithRelationInputSchema.array(), GoogleCalendarAuthOrderByWithRelationInputSchema]).optional(),
    cursor: GoogleCalendarAuthWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default GoogleCalendarAuthAggregateArgsSchema;
