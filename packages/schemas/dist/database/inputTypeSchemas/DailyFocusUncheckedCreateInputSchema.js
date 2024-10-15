import { z } from 'zod';
export const DailyFocusUncheckedCreateInputSchema = z.object({
    value: z.string(),
    createdAt: z.coerce.date().optional()
}).strict();
export default DailyFocusUncheckedCreateInputSchema;
