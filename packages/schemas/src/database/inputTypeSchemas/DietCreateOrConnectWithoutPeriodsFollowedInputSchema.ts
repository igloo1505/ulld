import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietWhereUniqueInputSchema } from './DietWhereUniqueInputSchema';
import { DietCreateWithoutPeriodsFollowedInputSchema } from './DietCreateWithoutPeriodsFollowedInputSchema';
import { DietUncheckedCreateWithoutPeriodsFollowedInputSchema } from './DietUncheckedCreateWithoutPeriodsFollowedInputSchema';

export const DietCreateOrConnectWithoutPeriodsFollowedInputSchema: z.ZodType<Prisma.DietCreateOrConnectWithoutPeriodsFollowedInput> = z.object({
  where: z.lazy(() => DietWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DietCreateWithoutPeriodsFollowedInputSchema),z.lazy(() => DietUncheckedCreateWithoutPeriodsFollowedInputSchema) ]),
}).strict();

export default DietCreateOrConnectWithoutPeriodsFollowedInputSchema;
