import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QAPairCreateManyInputSchema } from '../inputTypeSchemas/QAPairCreateManyInputSchema'

export const QAPairCreateManyAndReturnArgsSchema: z.ZodType<Prisma.QAPairCreateManyAndReturnArgs> = z.object({
  data: z.union([ QAPairCreateManyInputSchema,QAPairCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default QAPairCreateManyAndReturnArgsSchema;
