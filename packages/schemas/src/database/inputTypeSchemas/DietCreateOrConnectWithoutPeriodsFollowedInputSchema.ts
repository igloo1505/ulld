import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DietWhereUniqueInputSchema } from '../DietWhereUniqueInputSchema.js';
import { DietCreateWithoutPeriodsFollowedInputSchema } from '../DietCreateWithoutPeriodsFollowedInputSchema.js';
import { DietUncheckedCreateWithoutPeriodsFollowedInputSchema } from '../DietUncheckedCreateWithoutPeriodsFollowedInputSchema.js';
export const DietCreateOrConnectWithoutPeriodsFollowedInputSchema: z.ZodType<Prisma.DietCreateOrConnectWithoutPeriodsFollowedInput> = z.object({
  where: z.lazy(() => DietWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DietCreateWithoutPeriodsFollowedInputSchema),z.lazy(() => DietUncheckedCreateWithoutPeriodsFollowedInputSchema) ]),
}).strict();
export default DietCreateOrConnectWithoutPeriodsFollowedInputSchema;