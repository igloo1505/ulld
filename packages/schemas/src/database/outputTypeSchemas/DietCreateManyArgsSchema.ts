import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DietCreateManyInputSchema.js
export const DietCreateManyArgsSchema: z.ZodType<Prisma.DietCreateManyArgs> = z.object({
  data: z.union([ DietCreateManyInputSchema,DietCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default DietCreateManyArgsSchema;