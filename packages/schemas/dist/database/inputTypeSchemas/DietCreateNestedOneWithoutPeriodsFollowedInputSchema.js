import { z } from 'zod';
import { DietCreateWithoutPeriodsFollowedInputSchema } from './DietCreateWithoutPeriodsFollowedInputSchema.js';
import { DietUncheckedCreateWithoutPeriodsFollowedInputSchema } from './DietUncheckedCreateWithoutPeriodsFollowedInputSchema.js';
import { DietCreateOrConnectWithoutPeriodsFollowedInputSchema } from './DietCreateOrConnectWithoutPeriodsFollowedInputSchema.js';
import { DietWhereUniqueInputSchema } from './DietWhereUniqueInputSchema.js';
export const DietCreateNestedOneWithoutPeriodsFollowedInputSchema = z.object({
    create: z.union([z.lazy(() => DietCreateWithoutPeriodsFollowedInputSchema), z.lazy(() => DietUncheckedCreateWithoutPeriodsFollowedInputSchema)]).optional(),
    connectOrCreate: z.lazy(() => DietCreateOrConnectWithoutPeriodsFollowedInputSchema).optional(),
    connect: z.lazy(() => DietWhereUniqueInputSchema).optional()
}).strict();
export default DietCreateNestedOneWithoutPeriodsFollowedInputSchema;
