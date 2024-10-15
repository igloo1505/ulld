import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema.js';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema.js';
import { InputJsonValueSchema } from './InputJsonValueSchema.js';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema.js';
import { RelatedValuesUpdateequationIdInputSchema } from './RelatedValuesUpdateequationIdInputSchema.js';
export const RelatedValuesUncheckedUpdateManyInputSchema = z.object({
    id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
    input: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
    output: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
    equationId: z.union([z.lazy(() => RelatedValuesUpdateequationIdInputSchema), z.number().int().array()]).optional(),
}).strict();
export default RelatedValuesUncheckedUpdateManyInputSchema;
