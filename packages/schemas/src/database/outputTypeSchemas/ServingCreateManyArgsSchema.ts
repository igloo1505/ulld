import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServingCreateManyInputSchema } from '../inputTypeSchemas/ServingCreateManyInputSchema'

export const ServingCreateManyArgsSchema: z.ZodType<Prisma.ServingCreateManyArgs> = z.object({
  data: z.union([ ServingCreateManyInputSchema,ServingCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ServingCreateManyArgsSchema;
