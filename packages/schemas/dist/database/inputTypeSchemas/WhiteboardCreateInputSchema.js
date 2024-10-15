import { z } from 'zod';
export const WhiteboardCreateInputSchema = z.object({
    id: z.string(),
    data: z.instanceof(Buffer)
}).strict();
export default WhiteboardCreateInputSchema;
