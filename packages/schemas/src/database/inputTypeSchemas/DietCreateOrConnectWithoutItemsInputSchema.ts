import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietWhereUniqueInputSchema } from './DietWhereUniqueInputSchema';
import { DietCreateWithoutItemsInputSchema } from './DietCreateWithoutItemsInputSchema';
import { DietUncheckedCreateWithoutItemsInputSchema } from './DietUncheckedCreateWithoutItemsInputSchema';

export const DietCreateOrConnectWithoutItemsInputSchema: z.ZodType<Prisma.DietCreateOrConnectWithoutItemsInput> = z.object({
  where: z.lazy(() => DietWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DietCreateWithoutItemsInputSchema),z.lazy(() => DietUncheckedCreateWithoutItemsInputSchema) ]),
}).strict();

export default DietCreateOrConnectWithoutItemsInputSchema;
