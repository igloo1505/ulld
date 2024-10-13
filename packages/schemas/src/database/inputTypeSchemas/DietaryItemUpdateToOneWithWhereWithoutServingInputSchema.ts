import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DietaryItemWhereInputSchema } from '../DietaryItemWhereInputSchema.js';
import { DietaryItemUpdateWithoutServingInputSchema } from '../DietaryItemUpdateWithoutServingInputSchema.js';
import { DietaryItemUncheckedUpdateWithoutServingInputSchema } from '../DietaryItemUncheckedUpdateWithoutServingInputSchema.js';
export const DietaryItemUpdateToOneWithWhereWithoutServingInputSchema: z.ZodType<Prisma.DietaryItemUpdateToOneWithWhereWithoutServingInput> = z.object({
  where: z.lazy(() => DietaryItemWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DietaryItemUpdateWithoutServingInputSchema),z.lazy(() => DietaryItemUncheckedUpdateWithoutServingInputSchema) ]),
}).strict();
export default DietaryItemUpdateToOneWithWhereWithoutServingInputSchema;