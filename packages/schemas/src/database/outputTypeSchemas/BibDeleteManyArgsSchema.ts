import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { BibWhereInputSchema } from '../inputTypeSchemas/BibWhereInputSchema.js'
export const BibDeleteManyArgsSchema: z.ZodType<Prisma.BibDeleteManyArgs> = z.object({
  where: BibWhereInputSchema.optional(),
}).strict() ;
export default BibDeleteManyArgsSchema;