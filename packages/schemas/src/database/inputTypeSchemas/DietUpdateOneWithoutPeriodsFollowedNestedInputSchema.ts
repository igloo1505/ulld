import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietCreateWithoutPeriodsFollowedInputSchema } from './DietCreateWithoutPeriodsFollowedInputSchema';
import { DietUncheckedCreateWithoutPeriodsFollowedInputSchema } from './DietUncheckedCreateWithoutPeriodsFollowedInputSchema';
import { DietCreateOrConnectWithoutPeriodsFollowedInputSchema } from './DietCreateOrConnectWithoutPeriodsFollowedInputSchema';
import { DietUpsertWithoutPeriodsFollowedInputSchema } from './DietUpsertWithoutPeriodsFollowedInputSchema';
import { DietWhereInputSchema } from './DietWhereInputSchema';
import { DietWhereUniqueInputSchema } from './DietWhereUniqueInputSchema';
import { DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema } from './DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema';
import { DietUpdateWithoutPeriodsFollowedInputSchema } from './DietUpdateWithoutPeriodsFollowedInputSchema';
import { DietUncheckedUpdateWithoutPeriodsFollowedInputSchema } from './DietUncheckedUpdateWithoutPeriodsFollowedInputSchema';

export const DietUpdateOneWithoutPeriodsFollowedNestedInputSchema: z.ZodType<Prisma.DietUpdateOneWithoutPeriodsFollowedNestedInput> = z.object({
  create: z.union([ z.lazy(() => DietCreateWithoutPeriodsFollowedInputSchema),z.lazy(() => DietUncheckedCreateWithoutPeriodsFollowedInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DietCreateOrConnectWithoutPeriodsFollowedInputSchema).optional(),
  upsert: z.lazy(() => DietUpsertWithoutPeriodsFollowedInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => DietWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => DietWhereInputSchema) ]).optional(),
  connect: z.lazy(() => DietWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema),z.lazy(() => DietUpdateWithoutPeriodsFollowedInputSchema),z.lazy(() => DietUncheckedUpdateWithoutPeriodsFollowedInputSchema) ]).optional(),
}).strict();

export default DietUpdateOneWithoutPeriodsFollowedNestedInputSchema;
