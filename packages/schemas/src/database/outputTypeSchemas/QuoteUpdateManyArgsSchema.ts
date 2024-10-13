import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/QuoteUpdateManyMutationInputSchema.js
..//inputTypeSchemas/QuoteUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/QuoteWhereInputSchema.js
export const QuoteUpdateManyArgsSchema: z.ZodType<Prisma.QuoteUpdateManyArgs> = z.object({
  data: z.union([ QuoteUpdateManyMutationInputSchema,QuoteUncheckedUpdateManyInputSchema ]),
  where: QuoteWhereInputSchema.optional(),
}).strict() ;
export default QuoteUpdateManyArgsSchema;