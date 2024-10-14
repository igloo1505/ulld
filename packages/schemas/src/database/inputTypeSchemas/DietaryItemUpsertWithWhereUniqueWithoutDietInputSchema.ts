import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DietaryItemWhereUniqueInputSchema } from './DietaryItemWhereUniqueInputSchema.js';
import { DietaryItemUpdateWithoutDietInputSchema } from './DietaryItemUpdateWithoutDietInputSchema.js';
import { DietaryItemUncheckedUpdateWithoutDietInputSchema } from './DietaryItemUncheckedUpdateWithoutDietInputSchema.js';
import { DietaryItemCreateWithoutDietInputSchema } from './DietaryItemCreateWithoutDietInputSchema.js';
import { DietaryItemUncheckedCreateWithoutDietInputSchema } from './DietaryItemUncheckedCreateWithoutDietInputSchema.js';
export const DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema: z.ZodType<Prisma.DietaryItemUpsertWithWhereUniqueWithoutDietInput> = z.object({
  where: z.lazy(() => DietaryItemWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DietaryItemUpdateWithoutDietInputSchema),z.lazy(() => DietaryItemUncheckedUpdateWithoutDietInputSchema) ]),
  create: z.union([ z.lazy(() => DietaryItemCreateWithoutDietInputSchema),z.lazy(() => DietaryItemUncheckedCreateWithoutDietInputSchema) ]),
}).strict();
export default DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema;