import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DietaryItemCreateWithoutDietInputSchema } from './DietaryItemCreateWithoutDietInputSchema.js';
import { DietaryItemUncheckedCreateWithoutDietInputSchema } from './DietaryItemUncheckedCreateWithoutDietInputSchema.js';
import { DietaryItemCreateOrConnectWithoutDietInputSchema } from './DietaryItemCreateOrConnectWithoutDietInputSchema.js';
import { DietaryItemWhereUniqueInputSchema } from './DietaryItemWhereUniqueInputSchema.js';
export const DietaryItemCreateNestedManyWithoutDietInputSchema: z.ZodType<Prisma.DietaryItemCreateNestedManyWithoutDietInput> = z.object({
  create: z.union([ z.lazy(() => DietaryItemCreateWithoutDietInputSchema),z.lazy(() => DietaryItemCreateWithoutDietInputSchema).array(),z.lazy(() => DietaryItemUncheckedCreateWithoutDietInputSchema),z.lazy(() => DietaryItemUncheckedCreateWithoutDietInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DietaryItemCreateOrConnectWithoutDietInputSchema),z.lazy(() => DietaryItemCreateOrConnectWithoutDietInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DietaryItemWhereUniqueInputSchema),z.lazy(() => DietaryItemWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default DietaryItemCreateNestedManyWithoutDietInputSchema;