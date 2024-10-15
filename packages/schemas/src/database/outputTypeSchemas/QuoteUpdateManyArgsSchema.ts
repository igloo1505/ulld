import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { QuoteUpdateManyMutationInputSchema } from '../inputTypeSchemas/QuoteUpdateManyMutationInputSchema.js'
import { QuoteUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/QuoteUncheckedUpdateManyInputSchema.js'
import { QuoteWhereInputSchema } from '../inputTypeSchemas/QuoteWhereInputSchema.js'
export const QuoteUpdateManyArgsSchema: z.ZodType<Prisma.QuoteUpdateManyArgs> = z.object({
  data: z.union([ QuoteUpdateManyMutationInputSchema,QuoteUncheckedUpdateManyInputSchema ]),
  where: QuoteWhereInputSchema.optional(),
}).strict() ;
export default QuoteUpdateManyArgsSchema;