import { z } from 'zod';
export const DailyFocusCreateManyInputSchema = z.object({
    value: z.string(),
    createdAt: z.coerce.date().optional()
}).strict();
export default DailyFocusCreateManyInputSchema;
