import { z } from 'zod';
export const GoogleCalendarAuthSelectSchema = z.object({
    id: z.boolean().optional(),
    auth: z.boolean().optional(),
}).strict();
export default GoogleCalendarAuthSelectSchema;
