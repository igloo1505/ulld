import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BibEntryWhereInputSchema } from '../inputTypeSchemas/BibEntryWhereInputSchema'

export const BibEntryDeleteManyArgsSchema: z.ZodType<Prisma.BibEntryDeleteManyArgs> = z.object({
  where: BibEntryWhereInputSchema.optional(),
}).strict() ;

export default BibEntryDeleteManyArgsSchema;
