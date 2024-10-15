import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
export const NoteTypeUncheckedUpdateInputSchema = z.object({
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
export default NoteTypeUncheckedUpdateInputSchema;
