import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/IpynbWhereInputSchema.js
export const IpynbDeleteManyArgsSchema: z.ZodType<Prisma.IpynbDeleteManyArgs> = z.object({
  where: IpynbWhereInputSchema.optional(),
}).strict() ;
export default IpynbDeleteManyArgsSchema;