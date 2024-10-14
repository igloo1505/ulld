import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QAPairUpdateManyMutationInputSchema } from '../inputTypeSchemas/QAPairUpdateManyMutationInputSchema'
import { QAPairUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/QAPairUncheckedUpdateManyInputSchema'
import { QAPairWhereInputSchema } from '../inputTypeSchemas/QAPairWhereInputSchema'

export const QAPairUpdateManyArgsSchema: z.ZodType<Prisma.QAPairUpdateManyArgs> = z.object({
  data: z.union([ QAPairUpdateManyMutationInputSchema,QAPairUncheckedUpdateManyInputSchema ]),
  where: QAPairWhereInputSchema.optional(),
}).strict() ;

export default QAPairUpdateManyArgsSchema;
