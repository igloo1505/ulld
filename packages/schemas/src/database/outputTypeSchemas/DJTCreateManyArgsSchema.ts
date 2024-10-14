import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { DJTCreateManyInputSchema } from '../inputTypeSchemas/DJTCreateManyInputSchema.js'
export const DJTCreateManyArgsSchema: z.ZodType<Prisma.DJTCreateManyArgs> = z.object({
  data: z.union([ DJTCreateManyInputSchema,DJTCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default DJTCreateManyArgsSchema;