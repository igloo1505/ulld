import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DietaryItemCreateWithoutServingInputSchema } from '../DietaryItemCreateWithoutServingInputSchema.js';
import { DietaryItemUncheckedCreateWithoutServingInputSchema } from '../DietaryItemUncheckedCreateWithoutServingInputSchema.js';
import { DietaryItemCreateOrConnectWithoutServingInputSchema } from '../DietaryItemCreateOrConnectWithoutServingInputSchema.js';
import { DietaryItemWhereUniqueInputSchema } from '../DietaryItemWhereUniqueInputSchema.js';
export const DietaryItemCreateNestedOneWithoutServingInputSchema: z.ZodType<Prisma.DietaryItemCreateNestedOneWithoutServingInput> = z.object({
  create: z.union([ z.lazy(() => DietaryItemCreateWithoutServingInputSchema),z.lazy(() => DietaryItemUncheckedCreateWithoutServingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DietaryItemCreateOrConnectWithoutServingInputSchema).optional(),
  connect: z.lazy(() => DietaryItemWhereUniqueInputSchema).optional()
}).strict();
export default DietaryItemCreateNestedOneWithoutServingInputSchema;