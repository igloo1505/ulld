import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { JsonNullValueInputSchema } from '../JsonNullValueInputSchema.js';
import { InputJsonValueSchema } from '../InputJsonValueSchema.js';
import { RelatedValuesCreateequationIdInputSchema } from '../RelatedValuesCreateequationIdInputSchema.js';
export const RelatedValuesCreateWithoutEquationsInputSchema: z.ZodType<Prisma.RelatedValuesCreateWithoutEquationsInput> = z.object({
  input: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  output: z.number(),
  equationId: z.union([ z.lazy(() => RelatedValuesCreateequationIdInputSchema),z.number().int().array() ]).optional(),
}).strict();
export default RelatedValuesCreateWithoutEquationsInputSchema;