import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { RelatedValuesCreateequationIdInputSchema } from './RelatedValuesCreateequationIdInputSchema';
import { EquationCreateNestedManyWithoutRelatedValuesInputSchema } from './EquationCreateNestedManyWithoutRelatedValuesInputSchema';

export const RelatedValuesCreateInputSchema: z.ZodType<Prisma.RelatedValuesCreateInput> = z.object({
  input: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  output: z.number(),
  equationId: z.union([ z.lazy(() => RelatedValuesCreateequationIdInputSchema),z.number().int().array() ]).optional(),
  equations: z.lazy(() => EquationCreateNestedManyWithoutRelatedValuesInputSchema).optional()
}).strict();

export default RelatedValuesCreateInputSchema;
