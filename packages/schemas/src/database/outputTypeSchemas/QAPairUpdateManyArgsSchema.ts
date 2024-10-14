import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { QAPairUpdateManyMutationInputSchema } from '../inputTypeSchemas/QAPairUpdateManyMutationInputSchema.js'
import { QAPairUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/QAPairUncheckedUpdateManyInputSchema.js'
import { QAPairWhereInputSchema } from '../inputTypeSchemas/QAPairWhereInputSchema.js'
export const QAPairUpdateManyArgsSchema: z.ZodType<Prisma.QAPairUpdateManyArgs> = z.object({
  data: z.union([ QAPairUpdateManyMutationInputSchema,QAPairUncheckedUpdateManyInputSchema ]),
  where: QAPairWhereInputSchema.optional(),
}).strict() ;
export default QAPairUpdateManyArgsSchema;