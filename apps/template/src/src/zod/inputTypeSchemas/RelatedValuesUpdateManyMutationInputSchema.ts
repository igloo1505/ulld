import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { RelatedValuesUpdateequationIdInputSchema } from './RelatedValuesUpdateequationIdInputSchema';

export const RelatedValuesUpdateManyMutationInputSchema: z.ZodType<Prisma.RelatedValuesUpdateManyMutationInput> = z.object({
  input: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  output: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  equationId: z.union([ z.lazy(() => RelatedValuesUpdateequationIdInputSchema),z.number().int().array() ]).optional(),
}).strict();

export default RelatedValuesUpdateManyMutationInputSchema;
