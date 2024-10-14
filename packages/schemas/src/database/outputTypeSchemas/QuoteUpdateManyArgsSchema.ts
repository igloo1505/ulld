import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuoteUpdateManyMutationInputSchema } from '../inputTypeSchemas/QuoteUpdateManyMutationInputSchema'
import { QuoteUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/QuoteUncheckedUpdateManyInputSchema'
import { QuoteWhereInputSchema } from '../inputTypeSchemas/QuoteWhereInputSchema'

export const QuoteUpdateManyArgsSchema: z.ZodType<Prisma.QuoteUpdateManyArgs> = z.object({
  data: z.union([ QuoteUpdateManyMutationInputSchema,QuoteUncheckedUpdateManyInputSchema ]),
  where: QuoteWhereInputSchema.optional(),
}).strict() ;

export default QuoteUpdateManyArgsSchema;
