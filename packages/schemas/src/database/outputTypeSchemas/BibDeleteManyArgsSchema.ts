import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BibWhereInputSchema } from '../inputTypeSchemas/BibWhereInputSchema'

export const BibDeleteManyArgsSchema: z.ZodType<Prisma.BibDeleteManyArgs> = z.object({
  where: BibWhereInputSchema.optional(),
}).strict() ;

export default BibDeleteManyArgsSchema;
