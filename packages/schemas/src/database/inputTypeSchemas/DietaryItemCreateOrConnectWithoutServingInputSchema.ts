import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DietaryItemWhereUniqueInputSchema } from './DietaryItemWhereUniqueInputSchema.js';
import { DietaryItemCreateWithoutServingInputSchema } from './DietaryItemCreateWithoutServingInputSchema.js';
import { DietaryItemUncheckedCreateWithoutServingInputSchema } from './DietaryItemUncheckedCreateWithoutServingInputSchema.js';
export const DietaryItemCreateOrConnectWithoutServingInputSchema: z.ZodType<Prisma.DietaryItemCreateOrConnectWithoutServingInput> = z.object({
  where: z.lazy(() => DietaryItemWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DietaryItemCreateWithoutServingInputSchema),z.lazy(() => DietaryItemUncheckedCreateWithoutServingInputSchema) ]),
}).strict();
export default DietaryItemCreateOrConnectWithoutServingInputSchema;