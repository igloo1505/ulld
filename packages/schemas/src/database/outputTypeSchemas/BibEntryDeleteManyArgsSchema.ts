import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { BibEntryWhereInputSchema } from '../inputTypeSchemas/BibEntryWhereInputSchema.js'
export const BibEntryDeleteManyArgsSchema: z.ZodType<Prisma.BibEntryDeleteManyArgs> = z.object({
  where: BibEntryWhereInputSchema.optional(),
}).strict() ;
export default BibEntryDeleteManyArgsSchema;