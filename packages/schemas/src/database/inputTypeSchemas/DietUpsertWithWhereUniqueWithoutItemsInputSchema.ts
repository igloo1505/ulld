import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietWhereUniqueInputSchema } from './DietWhereUniqueInputSchema';
import { DietUpdateWithoutItemsInputSchema } from './DietUpdateWithoutItemsInputSchema';
import { DietUncheckedUpdateWithoutItemsInputSchema } from './DietUncheckedUpdateWithoutItemsInputSchema';
import { DietCreateWithoutItemsInputSchema } from './DietCreateWithoutItemsInputSchema';
import { DietUncheckedCreateWithoutItemsInputSchema } from './DietUncheckedCreateWithoutItemsInputSchema';

export const DietUpsertWithWhereUniqueWithoutItemsInputSchema: z.ZodType<Prisma.DietUpsertWithWhereUniqueWithoutItemsInput> = z.object({
  where: z.lazy(() => DietWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DietUpdateWithoutItemsInputSchema),z.lazy(() => DietUncheckedUpdateWithoutItemsInputSchema) ]),
  create: z.union([ z.lazy(() => DietCreateWithoutItemsInputSchema),z.lazy(() => DietUncheckedCreateWithoutItemsInputSchema) ]),
}).strict();

export default DietUpsertWithWhereUniqueWithoutItemsInputSchema;
