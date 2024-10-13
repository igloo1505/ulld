import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/QAPairWhereInputSchema.js
export const QAPairDeleteManyArgsSchema: z.ZodType<Prisma.QAPairDeleteManyArgs> = z.object({
  where: QAPairWhereInputSchema.optional(),
}).strict() ;
export default QAPairDeleteManyArgsSchema;