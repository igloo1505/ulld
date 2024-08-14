import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietWhereInputSchema } from './DietWhereInputSchema';
import { DietUpdateWithoutPeriodsFollowedInputSchema } from './DietUpdateWithoutPeriodsFollowedInputSchema';
import { DietUncheckedUpdateWithoutPeriodsFollowedInputSchema } from './DietUncheckedUpdateWithoutPeriodsFollowedInputSchema';

export const DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema: z.ZodType<Prisma.DietUpdateToOneWithWhereWithoutPeriodsFollowedInput> = z.object({
  where: z.lazy(() => DietWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DietUpdateWithoutPeriodsFollowedInputSchema),z.lazy(() => DietUncheckedUpdateWithoutPeriodsFollowedInputSchema) ]),
}).strict();

export default DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema;
