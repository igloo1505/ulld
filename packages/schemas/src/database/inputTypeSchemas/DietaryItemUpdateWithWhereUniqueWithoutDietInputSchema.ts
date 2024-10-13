import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DietaryItemWhereUniqueInputSchema } from '../DietaryItemWhereUniqueInputSchema.js';
import { DietaryItemUpdateWithoutDietInputSchema } from '../DietaryItemUpdateWithoutDietInputSchema.js';
import { DietaryItemUncheckedUpdateWithoutDietInputSchema } from '../DietaryItemUncheckedUpdateWithoutDietInputSchema.js';
export const DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema: z.ZodType<Prisma.DietaryItemUpdateWithWhereUniqueWithoutDietInput> = z.object({
  where: z.lazy(() => DietaryItemWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DietaryItemUpdateWithoutDietInputSchema),z.lazy(() => DietaryItemUncheckedUpdateWithoutDietInputSchema) ]),
}).strict();
export default DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema;