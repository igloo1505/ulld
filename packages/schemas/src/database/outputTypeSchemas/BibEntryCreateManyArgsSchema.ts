import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BibEntryCreateManyInputSchema } from '../inputTypeSchemas/BibEntryCreateManyInputSchema'

export const BibEntryCreateManyArgsSchema: z.ZodType<Prisma.BibEntryCreateManyArgs> = z.object({
  data: z.union([ BibEntryCreateManyInputSchema,BibEntryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BibEntryCreateManyArgsSchema;
