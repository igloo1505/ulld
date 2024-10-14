import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QAPairWhereInputSchema } from '../inputTypeSchemas/QAPairWhereInputSchema'

export const QAPairDeleteManyArgsSchema: z.ZodType<Prisma.QAPairDeleteManyArgs> = z.object({
  where: QAPairWhereInputSchema.optional(),
}).strict() ;

export default QAPairDeleteManyArgsSchema;
