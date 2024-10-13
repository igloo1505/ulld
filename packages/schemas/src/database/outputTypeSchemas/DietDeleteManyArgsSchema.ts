import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DietWhereInputSchema.js
export const DietDeleteManyArgsSchema: z.ZodType<Prisma.DietDeleteManyArgs> = z.object({
  where: DietWhereInputSchema.optional(),
}).strict() ;
export default DietDeleteManyArgsSchema;