import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DietaryItemWhereUniqueInputSchema } from '../DietaryItemWhereUniqueInputSchema.js';
import { DietaryItemCreateWithoutDietInputSchema } from '../DietaryItemCreateWithoutDietInputSchema.js';
import { DietaryItemUncheckedCreateWithoutDietInputSchema } from '../DietaryItemUncheckedCreateWithoutDietInputSchema.js';
export const DietaryItemCreateOrConnectWithoutDietInputSchema: z.ZodType<Prisma.DietaryItemCreateOrConnectWithoutDietInput> = z.object({
  where: z.lazy(() => DietaryItemWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DietaryItemCreateWithoutDietInputSchema),z.lazy(() => DietaryItemUncheckedCreateWithoutDietInputSchema) ]),
}).strict();
export default DietaryItemCreateOrConnectWithoutDietInputSchema;