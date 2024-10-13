import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/BibEntryUpdateManyMutationInputSchema.js
..//inputTypeSchemas/BibEntryUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/BibEntryWhereInputSchema.js
export const BibEntryUpdateManyArgsSchema: z.ZodType<Prisma.BibEntryUpdateManyArgs> = z.object({
  data: z.union([ BibEntryUpdateManyMutationInputSchema,BibEntryUncheckedUpdateManyInputSchema ]),
  where: BibEntryWhereInputSchema.optional(),
}).strict() ;
export default BibEntryUpdateManyArgsSchema;