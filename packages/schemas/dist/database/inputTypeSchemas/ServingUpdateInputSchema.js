import { z } from 'zod';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema.js';
import { QUANTITY_GUESSSchema } from './QUANTITY_GUESSSchema.js';
import { NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema } from './NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema.js';
import { DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema } from './DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema.js';
export const ServingUpdateInputSchema = z.object({
    quant_oz: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
    quant_guess: z.union([z.lazy(() => QUANTITY_GUESSSchema), z.lazy(() => NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema)]).optional().nullable(),
    item: z.lazy(() => DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema).optional()
}).strict();
export default ServingUpdateInputSchema;
