import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IpynbWhereInputSchema } from '../inputTypeSchemas/IpynbWhereInputSchema'

export const IpynbDeleteManyArgsSchema: z.ZodType<Prisma.IpynbDeleteManyArgs> = z.object({
  where: IpynbWhereInputSchema.optional(),
}).strict() ;

export default IpynbDeleteManyArgsSchema;
