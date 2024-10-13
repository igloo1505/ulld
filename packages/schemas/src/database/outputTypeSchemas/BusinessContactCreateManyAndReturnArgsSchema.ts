import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/BusinessContactCreateManyInputSchema.js
export const BusinessContactCreateManyAndReturnArgsSchema: z.ZodType<Prisma.BusinessContactCreateManyAndReturnArgs> = z.object({
  data: z.union([ BusinessContactCreateManyInputSchema,BusinessContactCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default BusinessContactCreateManyAndReturnArgsSchema;