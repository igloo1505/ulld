import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietaryItemWhereInputSchema } from './DietaryItemWhereInputSchema';
import { DietaryItemUpdateWithoutServingInputSchema } from './DietaryItemUpdateWithoutServingInputSchema';
import { DietaryItemUncheckedUpdateWithoutServingInputSchema } from './DietaryItemUncheckedUpdateWithoutServingInputSchema';

export const DietaryItemUpdateToOneWithWhereWithoutServingInputSchema: z.ZodType<Prisma.DietaryItemUpdateToOneWithWhereWithoutServingInput> = z.object({
  where: z.lazy(() => DietaryItemWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DietaryItemUpdateWithoutServingInputSchema),z.lazy(() => DietaryItemUncheckedUpdateWithoutServingInputSchema) ]),
}).strict();

export default DietaryItemUpdateToOneWithWhereWithoutServingInputSchema;
