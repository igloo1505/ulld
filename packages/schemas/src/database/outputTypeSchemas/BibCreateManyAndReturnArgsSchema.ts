import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BibCreateManyInputSchema } from '../inputTypeSchemas/BibCreateManyInputSchema'

export const BibCreateManyAndReturnArgsSchema: z.ZodType<Prisma.BibCreateManyAndReturnArgs> = z.object({
  data: z.union([ BibCreateManyInputSchema,BibCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BibCreateManyAndReturnArgsSchema;
