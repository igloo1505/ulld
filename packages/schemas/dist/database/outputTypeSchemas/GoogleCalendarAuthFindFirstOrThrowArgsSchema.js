import { z } from 'zod';
import { GoogleCalendarAuthWhereInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthWhereInputSchema.js';
import { GoogleCalendarAuthOrderByWithRelationInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthOrderByWithRelationInputSchema.js';
import { GoogleCalendarAuthWhereUniqueInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthWhereUniqueInputSchema.js';
import { GoogleCalendarAuthScalarFieldEnumSchema } from '../inputTypeSchemas/GoogleCalendarAuthScalarFieldEnumSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const GoogleCalendarAuthSelectSchema = z.object({
    id: z.boolean().optional(),
    auth: z.boolean().optional(),
}).strict();
export const GoogleCalendarAuthFindFirstOrThrowArgsSchema = z.object({
    select: GoogleCalendarAuthSelectSchema.optional(),
    where: GoogleCalendarAuthWhereInputSchema.optional(),
    orderBy: z.union([GoogleCalendarAuthOrderByWithRelationInputSchema.array(), GoogleCalendarAuthOrderByWithRelationInputSchema]).optional(),
    cursor: GoogleCalendarAuthWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([GoogleCalendarAuthScalarFieldEnumSchema, GoogleCalendarAuthScalarFieldEnumSchema.array()]).optional(),
}).strict();
export default GoogleCalendarAuthFindFirstOrThrowArgsSchema;
