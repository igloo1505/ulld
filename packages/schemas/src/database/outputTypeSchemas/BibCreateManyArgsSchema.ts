import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BibCreateManyInputSchema } from '../inputTypeSchemas/BibCreateManyInputSchema'

export const BibCreateManyArgsSchema: z.ZodType<Prisma.BibCreateManyArgs> = z.object({
  data: z.union([ BibCreateManyInputSchema,BibCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BibCreateManyArgsSchema;
