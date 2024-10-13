import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DietWhereInputSchema } from '../DietWhereInputSchema.js';
import { DietUpdateWithoutPeriodsFollowedInputSchema } from '../DietUpdateWithoutPeriodsFollowedInputSchema.js';
import { DietUncheckedUpdateWithoutPeriodsFollowedInputSchema } from '../DietUncheckedUpdateWithoutPeriodsFollowedInputSchema.js';
export const DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema: z.ZodType<Prisma.DietUpdateToOneWithWhereWithoutPeriodsFollowedInput> = z.object({
  where: z.lazy(() => DietWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DietUpdateWithoutPeriodsFollowedInputSchema),z.lazy(() => DietUncheckedUpdateWithoutPeriodsFollowedInputSchema) ]),
}).strict();
export default DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema;