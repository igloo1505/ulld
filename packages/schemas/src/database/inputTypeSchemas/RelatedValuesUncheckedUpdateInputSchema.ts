import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema.js';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema.js';
import { InputJsonValueSchema } from './InputJsonValueSchema.js';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema.js';
import { RelatedValuesUpdateequationIdInputSchema } from './RelatedValuesUpdateequationIdInputSchema.js';
import { EquationUncheckedUpdateManyWithoutRelatedValuesNestedInputSchema } from './EquationUncheckedUpdateManyWithoutRelatedValuesNestedInputSchema.js';
export const RelatedValuesUncheckedUpdateInputSchema: z.ZodType<Prisma.RelatedValuesUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  input: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  output: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  equationId: z.union([ z.lazy(() => RelatedValuesUpdateequationIdInputSchema),z.number().int().array() ]).optional(),
  equations: z.lazy(() => EquationUncheckedUpdateManyWithoutRelatedValuesNestedInputSchema).optional()
}).strict();
export default RelatedValuesUncheckedUpdateInputSchema;