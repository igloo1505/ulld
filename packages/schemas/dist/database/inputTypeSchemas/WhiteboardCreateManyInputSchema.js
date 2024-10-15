import { z } from 'zod';
export const WhiteboardCreateManyInputSchema = z.object({
    id: z.string(),
    data: z.instanceof(Buffer)
}).strict();
export default WhiteboardCreateManyInputSchema;
