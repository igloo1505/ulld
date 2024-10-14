import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquationCreateManyInputSchema } from '../inputTypeSchemas/EquationCreateManyInputSchema'

export const EquationCreateManyArgsSchema: z.ZodType<Prisma.EquationCreateManyArgs> = z.object({
  data: z.union([ EquationCreateManyInputSchema,EquationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default EquationCreateManyArgsSchema;
