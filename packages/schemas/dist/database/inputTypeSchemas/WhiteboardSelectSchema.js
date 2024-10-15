import { z } from 'zod';
export const WhiteboardSelectSchema = z.object({
    id: z.boolean().optional(),
    data: z.boolean().optional(),
}).strict();
export default WhiteboardSelectSchema;
