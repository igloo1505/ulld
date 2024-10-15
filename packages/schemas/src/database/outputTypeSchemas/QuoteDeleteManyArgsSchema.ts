import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { QuoteWhereInputSchema } from '../inputTypeSchemas/QuoteWhereInputSchema.js'
export const QuoteDeleteManyArgsSchema: z.ZodType<Prisma.QuoteDeleteManyArgs> = z.object({
  where: QuoteWhereInputSchema.optional(),
}).strict() ;
export default QuoteDeleteManyArgsSchema;