import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DietaryItemUpdateManyMutationInputSchema.js
..//inputTypeSchemas/DietaryItemUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/DietaryItemWhereInputSchema.js
export const DietaryItemUpdateManyArgsSchema: z.ZodType<Prisma.DietaryItemUpdateManyArgs> = z.object({
  data: z.union([ DietaryItemUpdateManyMutationInputSchema,DietaryItemUncheckedUpdateManyInputSchema ]),
  where: DietaryItemWhereInputSchema.optional(),
}).strict() ;
export default DietaryItemUpdateManyArgsSchema;