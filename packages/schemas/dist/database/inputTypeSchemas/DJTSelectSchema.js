import { z } from 'zod';
export const DJTSelectSchema = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    data: z.boolean().optional(),
}).strict();
export default DJTSelectSchema;
