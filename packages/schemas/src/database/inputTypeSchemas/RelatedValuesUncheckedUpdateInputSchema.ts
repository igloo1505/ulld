import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { RelatedValuesUpdateequationIdInputSchema } from './RelatedValuesUpdateequationIdInputSchema';
import { EquationUncheckedUpdateManyWithoutRelatedValuesNestedInputSchema } from './EquationUncheckedUpdateManyWithoutRelatedValuesNestedInputSchema';

export const RelatedValuesUncheckedUpdateInputSchema: z.ZodType<Prisma.RelatedValuesUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  input: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  output: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  equationId: z.union([ z.lazy(() => RelatedValuesUpdateequationIdInputSchema),z.number().int().array() ]).optional(),
  equations: z.lazy(() => EquationUncheckedUpdateManyWithoutRelatedValuesNestedInputSchema).optional()
}).strict();

export default RelatedValuesUncheckedUpdateInputSchema;
