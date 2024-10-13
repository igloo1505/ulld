import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DietCreateManyInputSchema.js
export const DietCreateManyAndReturnArgsSchema: z.ZodType<Prisma.DietCreateManyAndReturnArgs> = z.object({
  data: z.union([ DietCreateManyInputSchema,DietCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default DietCreateManyAndReturnArgsSchema;