import { z } from 'zod';
export const DietCountOutputTypeSelectSchema = z.object({
    items: z.boolean().optional(),
    periodsFollowed: z.boolean().optional(),
    HealthReport: z.boolean().optional(),
}).strict();
export default DietCountOutputTypeSelectSchema;
