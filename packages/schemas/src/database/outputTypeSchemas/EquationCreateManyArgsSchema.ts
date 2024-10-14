import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { EquationCreateManyInputSchema } from '../inputTypeSchemas/EquationCreateManyInputSchema.js'
export const EquationCreateManyArgsSchema: z.ZodType<Prisma.EquationCreateManyArgs> = z.object({
  data: z.union([ EquationCreateManyInputSchema,EquationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default EquationCreateManyArgsSchema;