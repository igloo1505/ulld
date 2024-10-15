import { z } from 'zod';
import { QUANTITY_GUESSSchema } from './QUANTITY_GUESSSchema.js';
export const ServingUncheckedCreateWithoutItemInputSchema = z.object({
    id: z.number().int().optional(),
    quant_oz: z.number().optional().nullable(),
    quant_guess: z.lazy(() => QUANTITY_GUESSSchema).optional().nullable()
}).strict();
export default ServingUncheckedCreateWithoutItemInputSchema;
