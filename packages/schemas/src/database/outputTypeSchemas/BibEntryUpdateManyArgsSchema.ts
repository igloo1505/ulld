import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { BibEntryUpdateManyMutationInputSchema } from '../inputTypeSchemas/BibEntryUpdateManyMutationInputSchema.js'
import { BibEntryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BibEntryUncheckedUpdateManyInputSchema.js'
import { BibEntryWhereInputSchema } from '../inputTypeSchemas/BibEntryWhereInputSchema.js'
export const BibEntryUpdateManyArgsSchema: z.ZodType<Prisma.BibEntryUpdateManyArgs> = z.object({
  data: z.union([ BibEntryUpdateManyMutationInputSchema,BibEntryUncheckedUpdateManyInputSchema ]),
  where: BibEntryWhereInputSchema.optional(),
}).strict() ;
export default BibEntryUpdateManyArgsSchema;