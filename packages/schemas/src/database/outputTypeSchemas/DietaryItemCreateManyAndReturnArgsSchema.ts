import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DietaryItemCreateManyInputSchema.js
export const DietaryItemCreateManyAndReturnArgsSchema: z.ZodType<Prisma.DietaryItemCreateManyAndReturnArgs> = z.object({
  data: z.union([ DietaryItemCreateManyInputSchema,DietaryItemCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default DietaryItemCreateManyAndReturnArgsSchema;