import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { RelatedValuesUpdateequationIdInputSchema } from './RelatedValuesUpdateequationIdInputSchema';
import { EquationUpdateManyWithoutRelatedValuesNestedInputSchema } from './EquationUpdateManyWithoutRelatedValuesNestedInputSchema';

export const RelatedValuesUpdateInputSchema: z.ZodType<Prisma.RelatedValuesUpdateInput> = z.object({
  input: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  output: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  equationId: z.union([ z.lazy(() => RelatedValuesUpdateequationIdInputSchema),z.number().int().array() ]).optional(),
  equations: z.lazy(() => EquationUpdateManyWithoutRelatedValuesNestedInputSchema).optional()
}).strict();

export default RelatedValuesUpdateInputSchema;
