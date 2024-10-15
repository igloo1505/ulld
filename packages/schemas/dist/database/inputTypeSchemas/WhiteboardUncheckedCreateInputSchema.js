import { z } from 'zod';
export const WhiteboardUncheckedCreateInputSchema = z.object({
    id: z.string(),
    data: z.instanceof(Buffer)
}).strict();
export default WhiteboardUncheckedCreateInputSchema;
