import { z } from 'zod';
export const CitationsGroupCountOutputTypeSelectSchema = z.object({
    entries: z.boolean().optional(),
}).strict();
export default CitationsGroupCountOutputTypeSelectSchema;
