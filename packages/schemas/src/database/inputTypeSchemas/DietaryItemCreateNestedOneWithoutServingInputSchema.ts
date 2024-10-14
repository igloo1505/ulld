import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietaryItemCreateWithoutServingInputSchema } from './DietaryItemCreateWithoutServingInputSchema';
import { DietaryItemUncheckedCreateWithoutServingInputSchema } from './DietaryItemUncheckedCreateWithoutServingInputSchema';
import { DietaryItemCreateOrConnectWithoutServingInputSchema } from './DietaryItemCreateOrConnectWithoutServingInputSchema';
import { DietaryItemWhereUniqueInputSchema } from './DietaryItemWhereUniqueInputSchema';

export const DietaryItemCreateNestedOneWithoutServingInputSchema: z.ZodType<Prisma.DietaryItemCreateNestedOneWithoutServingInput> = z.object({
  create: z.union([ z.lazy(() => DietaryItemCreateWithoutServingInputSchema),z.lazy(() => DietaryItemUncheckedCreateWithoutServingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DietaryItemCreateOrConnectWithoutServingInputSchema).optional(),
  connect: z.lazy(() => DietaryItemWhereUniqueInputSchema).optional()
}).strict();

export default DietaryItemCreateNestedOneWithoutServingInputSchema;
