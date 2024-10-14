import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { QAPairCreateManyInputSchema } from '../inputTypeSchemas/QAPairCreateManyInputSchema.js'
export const QAPairCreateManyArgsSchema: z.ZodType<Prisma.QAPairCreateManyArgs> = z.object({
  data: z.union([ QAPairCreateManyInputSchema,QAPairCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default QAPairCreateManyArgsSchema;