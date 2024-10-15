import { z } from 'zod';
export const DailyFocusSelectSchema = z.object({
    value: z.boolean().optional(),
    createdAt: z.boolean().optional(),
}).strict();
export default DailyFocusSelectSchema;
