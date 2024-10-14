import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietaryItemWhereUniqueInputSchema } from './DietaryItemWhereUniqueInputSchema';
import { DietaryItemUpdateWithoutDietInputSchema } from './DietaryItemUpdateWithoutDietInputSchema';
import { DietaryItemUncheckedUpdateWithoutDietInputSchema } from './DietaryItemUncheckedUpdateWithoutDietInputSchema';

export const DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema: z.ZodType<Prisma.DietaryItemUpdateWithWhereUniqueWithoutDietInput> = z.object({
  where: z.lazy(() => DietaryItemWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DietaryItemUpdateWithoutDietInputSchema),z.lazy(() => DietaryItemUncheckedUpdateWithoutDietInputSchema) ]),
}).strict();

export default DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema;
