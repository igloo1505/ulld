import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuoteCreateManyInputSchema } from '../inputTypeSchemas/QuoteCreateManyInputSchema'

export const QuoteCreateManyAndReturnArgsSchema: z.ZodType<Prisma.QuoteCreateManyAndReturnArgs> = z.object({
  data: z.union([ QuoteCreateManyInputSchema,QuoteCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default QuoteCreateManyAndReturnArgsSchema;
