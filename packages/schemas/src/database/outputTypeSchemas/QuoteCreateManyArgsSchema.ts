import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/QuoteCreateManyInputSchema.js
export const QuoteCreateManyArgsSchema: z.ZodType<Prisma.QuoteCreateManyArgs> = z.object({
  data: z.union([ QuoteCreateManyInputSchema,QuoteCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default QuoteCreateManyArgsSchema;