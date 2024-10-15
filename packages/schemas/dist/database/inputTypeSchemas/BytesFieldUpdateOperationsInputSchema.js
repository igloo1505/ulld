import { z } from 'zod';
export const BytesFieldUpdateOperationsInputSchema = z.object({
    set: z.instanceof(Buffer).optional()
}).strict();
export default BytesFieldUpdateOperationsInputSchema;
