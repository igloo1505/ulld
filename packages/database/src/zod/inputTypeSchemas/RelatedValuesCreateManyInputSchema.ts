import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { RelatedValuesCreateequationIdInputSchema } from './RelatedValuesCreateequationIdInputSchema';

export const RelatedValuesCreateManyInputSchema: z.ZodType<Prisma.RelatedValuesCreateManyInput> = z.object({
  id: z.number().int().optional(),
  input: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  output: z.number(),
  equationId: z.union([ z.lazy(() => RelatedValuesCreateequationIdInputSchema),z.number().int().array() ]).optional(),
}).strict();

export default RelatedValuesCreateManyInputSchema;
