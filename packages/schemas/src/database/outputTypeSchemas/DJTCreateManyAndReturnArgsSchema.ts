import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DJTCreateManyInputSchema.js
export const DJTCreateManyAndReturnArgsSchema: z.ZodType<Prisma.DJTCreateManyAndReturnArgs> = z.object({
  data: z.union([ DJTCreateManyInputSchema,DJTCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default DJTCreateManyAndReturnArgsSchema;