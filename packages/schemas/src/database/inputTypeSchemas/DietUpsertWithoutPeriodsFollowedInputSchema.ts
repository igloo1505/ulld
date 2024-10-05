import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietUpdateWithoutPeriodsFollowedInputSchema } from './DietUpdateWithoutPeriodsFollowedInputSchema';
import { DietUncheckedUpdateWithoutPeriodsFollowedInputSchema } from './DietUncheckedUpdateWithoutPeriodsFollowedInputSchema';
import { DietCreateWithoutPeriodsFollowedInputSchema } from './DietCreateWithoutPeriodsFollowedInputSchema';
import { DietUncheckedCreateWithoutPeriodsFollowedInputSchema } from './DietUncheckedCreateWithoutPeriodsFollowedInputSchema';
import { DietWhereInputSchema } from './DietWhereInputSchema';

export const DietUpsertWithoutPeriodsFollowedInputSchema: z.ZodType<Prisma.DietUpsertWithoutPeriodsFollowedInput> = z.object({
  update: z.union([ z.lazy(() => DietUpdateWithoutPeriodsFollowedInputSchema),z.lazy(() => DietUncheckedUpdateWithoutPeriodsFollowedInputSchema) ]),
  create: z.union([ z.lazy(() => DietCreateWithoutPeriodsFollowedInputSchema),z.lazy(() => DietUncheckedCreateWithoutPeriodsFollowedInputSchema) ]),
  where: z.lazy(() => DietWhereInputSchema).optional()
}).strict();

export default DietUpsertWithoutPeriodsFollowedInputSchema;
