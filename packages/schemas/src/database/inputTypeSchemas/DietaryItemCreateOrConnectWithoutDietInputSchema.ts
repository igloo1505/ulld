import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietaryItemWhereUniqueInputSchema } from './DietaryItemWhereUniqueInputSchema';
import { DietaryItemCreateWithoutDietInputSchema } from './DietaryItemCreateWithoutDietInputSchema';
import { DietaryItemUncheckedCreateWithoutDietInputSchema } from './DietaryItemUncheckedCreateWithoutDietInputSchema';

export const DietaryItemCreateOrConnectWithoutDietInputSchema: z.ZodType<Prisma.DietaryItemCreateOrConnectWithoutDietInput> = z.object({
  where: z.lazy(() => DietaryItemWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DietaryItemCreateWithoutDietInputSchema),z.lazy(() => DietaryItemUncheckedCreateWithoutDietInputSchema) ]),
}).strict();

export default DietaryItemCreateOrConnectWithoutDietInputSchema;
