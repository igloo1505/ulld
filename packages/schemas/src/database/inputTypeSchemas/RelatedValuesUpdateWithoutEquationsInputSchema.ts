import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { JsonNullValueInputSchema } from '../JsonNullValueInputSchema.js';
import { InputJsonValueSchema } from '../InputJsonValueSchema.js';
import { FloatFieldUpdateOperationsInputSchema } from '../FloatFieldUpdateOperationsInputSchema.js';
import { RelatedValuesUpdateequationIdInputSchema } from '../RelatedValuesUpdateequationIdInputSchema.js';
export const RelatedValuesUpdateWithoutEquationsInputSchema: z.ZodType<Prisma.RelatedValuesUpdateWithoutEquationsInput> = z.object({
  input: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  output: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  equationId: z.union([ z.lazy(() => RelatedValuesUpdateequationIdInputSchema),z.number().int().array() ]).optional(),
}).strict();
export default RelatedValuesUpdateWithoutEquationsInputSchema;