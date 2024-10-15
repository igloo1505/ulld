import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { DJTWhereInputSchema } from '../inputTypeSchemas/DJTWhereInputSchema.js'
export const DJTDeleteManyArgsSchema: z.ZodType<Prisma.DJTDeleteManyArgs> = z.object({
  where: DJTWhereInputSchema.optional(),
}).strict() ;
export default DJTDeleteManyArgsSchema;