import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { EquationCreateManyInputSchema } from '../inputTypeSchemas/EquationCreateManyInputSchema.js'
export const EquationCreateManyAndReturnArgsSchema: z.ZodType<Prisma.EquationCreateManyAndReturnArgs> = z.object({
  data: z.union([ EquationCreateManyInputSchema,EquationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default EquationCreateManyAndReturnArgsSchema;