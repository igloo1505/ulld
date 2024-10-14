import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { IpynbWhereInputSchema } from '../inputTypeSchemas/IpynbWhereInputSchema.js'
export const IpynbDeleteManyArgsSchema: z.ZodType<Prisma.IpynbDeleteManyArgs> = z.object({
  where: IpynbWhereInputSchema.optional(),
}).strict() ;
export default IpynbDeleteManyArgsSchema;