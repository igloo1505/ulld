import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DietaryItemCreateManyInputSchema } from '../inputTypeSchemas/DietaryItemCreateManyInputSchema'

export const DietaryItemCreateManyAndReturnArgsSchema: z.ZodType<Prisma.DietaryItemCreateManyAndReturnArgs> = z.object({
  data: z.union([ DietaryItemCreateManyInputSchema,DietaryItemCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default DietaryItemCreateManyAndReturnArgsSchema;
