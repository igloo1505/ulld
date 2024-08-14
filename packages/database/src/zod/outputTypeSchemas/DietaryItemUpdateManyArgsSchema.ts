import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DietaryItemUpdateManyMutationInputSchema } from '../inputTypeSchemas/DietaryItemUpdateManyMutationInputSchema'
import { DietaryItemUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DietaryItemUncheckedUpdateManyInputSchema'
import { DietaryItemWhereInputSchema } from '../inputTypeSchemas/DietaryItemWhereInputSchema'

export const DietaryItemUpdateManyArgsSchema: z.ZodType<Prisma.DietaryItemUpdateManyArgs> = z.object({
  data: z.union([ DietaryItemUpdateManyMutationInputSchema,DietaryItemUncheckedUpdateManyInputSchema ]),
  where: DietaryItemWhereInputSchema.optional(),
}).strict() ;

export default DietaryItemUpdateManyArgsSchema;
