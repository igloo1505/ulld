import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/BibUpdateManyMutationInputSchema.js
..//inputTypeSchemas/BibUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/BibWhereInputSchema.js
export const BibUpdateManyArgsSchema: z.ZodType<Prisma.BibUpdateManyArgs> = z.object({
  data: z.union([ BibUpdateManyMutationInputSchema,BibUncheckedUpdateManyInputSchema ]),
  where: BibWhereInputSchema.optional(),
}).strict() ;
export default BibUpdateManyArgsSchema;