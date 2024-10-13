import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/QAPairUpdateManyMutationInputSchema.js
..//inputTypeSchemas/QAPairUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/QAPairWhereInputSchema.js
export const QAPairUpdateManyArgsSchema: z.ZodType<Prisma.QAPairUpdateManyArgs> = z.object({
  data: z.union([ QAPairUpdateManyMutationInputSchema,QAPairUncheckedUpdateManyInputSchema ]),
  where: QAPairWhereInputSchema.optional(),
}).strict() ;
export default QAPairUpdateManyArgsSchema;