import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DietUpdateWithoutPeriodsFollowedInputSchema } from '../DietUpdateWithoutPeriodsFollowedInputSchema.js';
import { DietUncheckedUpdateWithoutPeriodsFollowedInputSchema } from '../DietUncheckedUpdateWithoutPeriodsFollowedInputSchema.js';
import { DietCreateWithoutPeriodsFollowedInputSchema } from '../DietCreateWithoutPeriodsFollowedInputSchema.js';
import { DietUncheckedCreateWithoutPeriodsFollowedInputSchema } from '../DietUncheckedCreateWithoutPeriodsFollowedInputSchema.js';
import { DietWhereInputSchema } from '../DietWhereInputSchema.js';
export const DietUpsertWithoutPeriodsFollowedInputSchema: z.ZodType<Prisma.DietUpsertWithoutPeriodsFollowedInput> = z.object({
  update: z.union([ z.lazy(() => DietUpdateWithoutPeriodsFollowedInputSchema),z.lazy(() => DietUncheckedUpdateWithoutPeriodsFollowedInputSchema) ]),
  create: z.union([ z.lazy(() => DietCreateWithoutPeriodsFollowedInputSchema),z.lazy(() => DietUncheckedCreateWithoutPeriodsFollowedInputSchema) ]),
  where: z.lazy(() => DietWhereInputSchema).optional()
}).strict();
export default DietUpsertWithoutPeriodsFollowedInputSchema;