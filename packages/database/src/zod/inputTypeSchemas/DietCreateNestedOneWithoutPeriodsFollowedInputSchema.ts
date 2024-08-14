import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietCreateWithoutPeriodsFollowedInputSchema } from './DietCreateWithoutPeriodsFollowedInputSchema';
import { DietUncheckedCreateWithoutPeriodsFollowedInputSchema } from './DietUncheckedCreateWithoutPeriodsFollowedInputSchema';
import { DietCreateOrConnectWithoutPeriodsFollowedInputSchema } from './DietCreateOrConnectWithoutPeriodsFollowedInputSchema';
import { DietWhereUniqueInputSchema } from './DietWhereUniqueInputSchema';

export const DietCreateNestedOneWithoutPeriodsFollowedInputSchema: z.ZodType<Prisma.DietCreateNestedOneWithoutPeriodsFollowedInput> = z.object({
  create: z.union([ z.lazy(() => DietCreateWithoutPeriodsFollowedInputSchema),z.lazy(() => DietUncheckedCreateWithoutPeriodsFollowedInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DietCreateOrConnectWithoutPeriodsFollowedInputSchema).optional(),
  connect: z.lazy(() => DietWhereUniqueInputSchema).optional()
}).strict();

export default DietCreateNestedOneWithoutPeriodsFollowedInputSchema;
