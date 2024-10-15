import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DietCreateWithoutPeriodsFollowedInputSchema } from './DietCreateWithoutPeriodsFollowedInputSchema.js';
import { DietUncheckedCreateWithoutPeriodsFollowedInputSchema } from './DietUncheckedCreateWithoutPeriodsFollowedInputSchema.js';
import { DietCreateOrConnectWithoutPeriodsFollowedInputSchema } from './DietCreateOrConnectWithoutPeriodsFollowedInputSchema.js';
import { DietUpsertWithoutPeriodsFollowedInputSchema } from './DietUpsertWithoutPeriodsFollowedInputSchema.js';
import { DietWhereInputSchema } from './DietWhereInputSchema.js';
import { DietWhereUniqueInputSchema } from './DietWhereUniqueInputSchema.js';
import { DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema } from './DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema.js';
import { DietUpdateWithoutPeriodsFollowedInputSchema } from './DietUpdateWithoutPeriodsFollowedInputSchema.js';
import { DietUncheckedUpdateWithoutPeriodsFollowedInputSchema } from './DietUncheckedUpdateWithoutPeriodsFollowedInputSchema.js';
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