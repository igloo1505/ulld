import { z } from 'zod';
export const DailyFocusCreateInputSchema = z.object({
    value: z.string(),
    createdAt: z.coerce.date().optional()
}).strict();
export default DailyFocusCreateInputSchema;
