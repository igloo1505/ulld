import { z } from 'zod';
export const NullableStringFieldUpdateOperationsInputSchema = z.object({
    set: z.string().optional().nullable()
}).strict();
export default NullableStringFieldUpdateOperationsInputSchema;
