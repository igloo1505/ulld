import { z } from 'zod';
export const NullableBoolFieldUpdateOperationsInputSchema = z.object({
    set: z.boolean().optional().nullable()
}).strict();
export default NullableBoolFieldUpdateOperationsInputSchema;
