import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { ServingCreateManyInputSchema } from '../inputTypeSchemas/ServingCreateManyInputSchema.js'
export const ServingCreateManyArgsSchema: z.ZodType<Prisma.ServingCreateManyArgs> = z.object({
  data: z.union([ ServingCreateManyInputSchema,ServingCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default ServingCreateManyArgsSchema;