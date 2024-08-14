import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuoteWhereInputSchema } from '../inputTypeSchemas/QuoteWhereInputSchema'

export const QuoteDeleteManyArgsSchema: z.ZodType<Prisma.QuoteDeleteManyArgs> = z.object({
  where: QuoteWhereInputSchema.optional(),
}).strict() ;

export default QuoteDeleteManyArgsSchema;
