import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BibUpdateManyMutationInputSchema } from '../inputTypeSchemas/BibUpdateManyMutationInputSchema'
import { BibUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BibUncheckedUpdateManyInputSchema'
import { BibWhereInputSchema } from '../inputTypeSchemas/BibWhereInputSchema'

export const BibUpdateManyArgsSchema: z.ZodType<Prisma.BibUpdateManyArgs> = z.object({
  data: z.union([ BibUpdateManyMutationInputSchema,BibUncheckedUpdateManyInputSchema ]),
  where: BibWhereInputSchema.optional(),
}).strict() ;

export default BibUpdateManyArgsSchema;
