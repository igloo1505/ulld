import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { RelatedValuesCreateequationIdInputSchema } from './RelatedValuesCreateequationIdInputSchema';
import { EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema } from './EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema';

export const RelatedValuesUncheckedCreateInputSchema: z.ZodType<Prisma.RelatedValuesUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  input: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  output: z.number(),
  equationId: z.union([ z.lazy(() => RelatedValuesCreateequationIdInputSchema),z.number().int().array() ]).optional(),
  equations: z.lazy(() => EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema).optional()
}).strict();

export default RelatedValuesUncheckedCreateInputSchema;
