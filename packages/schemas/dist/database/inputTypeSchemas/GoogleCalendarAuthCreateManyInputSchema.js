import { z } from 'zod';
export const GoogleCalendarAuthCreateManyInputSchema = z.object({
    id: z.number().int().optional(),
    auth: z.string().optional().nullable()
}).strict();
export default GoogleCalendarAuthCreateManyInputSchema;
