import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietaryItemWhereUniqueInputSchema } from './DietaryItemWhereUniqueInputSchema';
import { DietaryItemUpdateWithoutDietInputSchema } from './DietaryItemUpdateWithoutDietInputSchema';
import { DietaryItemUncheckedUpdateWithoutDietInputSchema } from './DietaryItemUncheckedUpdateWithoutDietInputSchema';
import { DietaryItemCreateWithoutDietInputSchema } from './DietaryItemCreateWithoutDietInputSchema';
import { DietaryItemUncheckedCreateWithoutDietInputSchema } from './DietaryItemUncheckedCreateWithoutDietInputSchema';

export const DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema: z.ZodType<Prisma.DietaryItemUpsertWithWhereUniqueWithoutDietInput> = z.object({
  where: z.lazy(() => DietaryItemWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DietaryItemUpdateWithoutDietInputSchema),z.lazy(() => DietaryItemUncheckedUpdateWithoutDietInputSchema) ]),
  create: z.union([ z.lazy(() => DietaryItemCreateWithoutDietInputSchema),z.lazy(() => DietaryItemUncheckedCreateWithoutDietInputSchema) ]),
}).strict();

export default DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema;
