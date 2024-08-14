import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietaryItemCreateWithoutServingInputSchema } from './DietaryItemCreateWithoutServingInputSchema';
import { DietaryItemUncheckedCreateWithoutServingInputSchema } from './DietaryItemUncheckedCreateWithoutServingInputSchema';
import { DietaryItemCreateOrConnectWithoutServingInputSchema } from './DietaryItemCreateOrConnectWithoutServingInputSchema';
import { DietaryItemUpsertWithoutServingInputSchema } from './DietaryItemUpsertWithoutServingInputSchema';
import { DietaryItemWhereUniqueInputSchema } from './DietaryItemWhereUniqueInputSchema';
import { DietaryItemUpdateToOneWithWhereWithoutServingInputSchema } from './DietaryItemUpdateToOneWithWhereWithoutServingInputSchema';
import { DietaryItemUpdateWithoutServingInputSchema } from './DietaryItemUpdateWithoutServingInputSchema';
import { DietaryItemUncheckedUpdateWithoutServingInputSchema } from './DietaryItemUncheckedUpdateWithoutServingInputSchema';

export const DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema: z.ZodType<Prisma.DietaryItemUpdateOneRequiredWithoutServingNestedInput> = z.object({
  create: z.union([ z.lazy(() => DietaryItemCreateWithoutServingInputSchema),z.lazy(() => DietaryItemUncheckedCreateWithoutServingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DietaryItemCreateOrConnectWithoutServingInputSchema).optional(),
  upsert: z.lazy(() => DietaryItemUpsertWithoutServingInputSchema).optional(),
  connect: z.lazy(() => DietaryItemWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DietaryItemUpdateToOneWithWhereWithoutServingInputSchema),z.lazy(() => DietaryItemUpdateWithoutServingInputSchema),z.lazy(() => DietaryItemUncheckedUpdateWithoutServingInputSchema) ]).optional(),
}).strict();

export default DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema;
