import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { DietaryItemWhereInputSchema } from '../inputTypeSchemas/DietaryItemWhereInputSchema.js'
export const DietaryItemDeleteManyArgsSchema: z.ZodType<Prisma.DietaryItemDeleteManyArgs> = z.object({
  where: DietaryItemWhereInputSchema.optional(),
}).strict() ;
export default DietaryItemDeleteManyArgsSchema;