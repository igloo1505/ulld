import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DietaryItemWhereInputSchema.js
export const DietaryItemDeleteManyArgsSchema: z.ZodType<Prisma.DietaryItemDeleteManyArgs> = z.object({
  where: DietaryItemWhereInputSchema.optional(),
}).strict() ;
export default DietaryItemDeleteManyArgsSchema;