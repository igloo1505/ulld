import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { BibUpdateManyMutationInputSchema } from '../inputTypeSchemas/BibUpdateManyMutationInputSchema.js'
import { BibUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BibUncheckedUpdateManyInputSchema.js'
import { BibWhereInputSchema } from '../inputTypeSchemas/BibWhereInputSchema.js'
export const BibUpdateManyArgsSchema: z.ZodType<Prisma.BibUpdateManyArgs> = z.object({
  data: z.union([ BibUpdateManyMutationInputSchema,BibUncheckedUpdateManyInputSchema ]),
  where: BibWhereInputSchema.optional(),
}).strict() ;
export default BibUpdateManyArgsSchema;