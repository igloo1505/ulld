import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuoteCreateManyInputSchema } from '../inputTypeSchemas/QuoteCreateManyInputSchema'

export const QuoteCreateManyArgsSchema: z.ZodType<Prisma.QuoteCreateManyArgs> = z.object({
  data: z.union([ QuoteCreateManyInputSchema,QuoteCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default QuoteCreateManyArgsSchema;
