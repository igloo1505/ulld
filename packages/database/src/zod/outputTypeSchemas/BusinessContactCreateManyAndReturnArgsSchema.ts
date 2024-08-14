import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BusinessContactCreateManyInputSchema } from '../inputTypeSchemas/BusinessContactCreateManyInputSchema'

export const BusinessContactCreateManyAndReturnArgsSchema: z.ZodType<Prisma.BusinessContactCreateManyAndReturnArgs> = z.object({
  data: z.union([ BusinessContactCreateManyInputSchema,BusinessContactCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BusinessContactCreateManyAndReturnArgsSchema;
