import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/ServingCreateManyInputSchema.js
export const ServingCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ServingCreateManyAndReturnArgs> = z.object({
  data: z.union([ ServingCreateManyInputSchema,ServingCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default ServingCreateManyAndReturnArgsSchema;