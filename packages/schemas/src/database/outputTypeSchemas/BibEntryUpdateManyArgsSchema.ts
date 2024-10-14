import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BibEntryUpdateManyMutationInputSchema } from '../inputTypeSchemas/BibEntryUpdateManyMutationInputSchema'
import { BibEntryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BibEntryUncheckedUpdateManyInputSchema'
import { BibEntryWhereInputSchema } from '../inputTypeSchemas/BibEntryWhereInputSchema'

export const BibEntryUpdateManyArgsSchema: z.ZodType<Prisma.BibEntryUpdateManyArgs> = z.object({
  data: z.union([ BibEntryUpdateManyMutationInputSchema,BibEntryUncheckedUpdateManyInputSchema ]),
  where: BibEntryWhereInputSchema.optional(),
}).strict() ;

export default BibEntryUpdateManyArgsSchema;
