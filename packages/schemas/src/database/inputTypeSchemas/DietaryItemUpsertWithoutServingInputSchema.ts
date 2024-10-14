import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietaryItemUpdateWithoutServingInputSchema } from './DietaryItemUpdateWithoutServingInputSchema';
import { DietaryItemUncheckedUpdateWithoutServingInputSchema } from './DietaryItemUncheckedUpdateWithoutServingInputSchema';
import { DietaryItemCreateWithoutServingInputSchema } from './DietaryItemCreateWithoutServingInputSchema';
import { DietaryItemUncheckedCreateWithoutServingInputSchema } from './DietaryItemUncheckedCreateWithoutServingInputSchema';
import { DietaryItemWhereInputSchema } from './DietaryItemWhereInputSchema';

export const DietaryItemUpsertWithoutServingInputSchema: z.ZodType<Prisma.DietaryItemUpsertWithoutServingInput> = z.object({
  update: z.union([ z.lazy(() => DietaryItemUpdateWithoutServingInputSchema),z.lazy(() => DietaryItemUncheckedUpdateWithoutServingInputSchema) ]),
  create: z.union([ z.lazy(() => DietaryItemCreateWithoutServingInputSchema),z.lazy(() => DietaryItemUncheckedCreateWithoutServingInputSchema) ]),
  where: z.lazy(() => DietaryItemWhereInputSchema).optional()
}).strict();

export default DietaryItemUpsertWithoutServingInputSchema;
