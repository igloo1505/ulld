import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DietCreateManyInputSchema } from '../inputTypeSchemas/DietCreateManyInputSchema'

export const DietCreateManyArgsSchema: z.ZodType<Prisma.DietCreateManyArgs> = z.object({
  data: z.union([ DietCreateManyInputSchema,DietCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default DietCreateManyArgsSchema;
