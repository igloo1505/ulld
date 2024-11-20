import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietaryItemWhereUniqueInputSchema } from './DietaryItemWhereUniqueInputSchema';
import { DietaryItemCreateWithoutServingInputSchema } from './DietaryItemCreateWithoutServingInputSchema';
import { DietaryItemUncheckedCreateWithoutServingInputSchema } from './DietaryItemUncheckedCreateWithoutServingInputSchema';

export const DietaryItemCreateOrConnectWithoutServingInputSchema: z.ZodType<Prisma.DietaryItemCreateOrConnectWithoutServingInput> = z.object({
  where: z.lazy(() => DietaryItemWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DietaryItemCreateWithoutServingInputSchema),z.lazy(() => DietaryItemUncheckedCreateWithoutServingInputSchema) ]),
}).strict();

export default DietaryItemCreateOrConnectWithoutServingInputSchema;
