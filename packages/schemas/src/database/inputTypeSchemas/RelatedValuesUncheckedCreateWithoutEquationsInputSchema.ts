import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema.js';
import { InputJsonValueSchema } from './InputJsonValueSchema.js';
import { RelatedValuesCreateequationIdInputSchema } from './RelatedValuesCreateequationIdInputSchema.js';
export const RelatedValuesUncheckedCreateWithoutEquationsInputSchema: z.ZodType<Prisma.RelatedValuesUncheckedCreateWithoutEquationsInput> = z.object({
  id: z.number().int().optional(),
  input: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  output: z.number(),
  equationId: z.union([ z.lazy(() => RelatedValuesCreateequationIdInputSchema),z.number().int().array() ]).optional(),
}).strict();
export default RelatedValuesUncheckedCreateWithoutEquationsInputSchema;