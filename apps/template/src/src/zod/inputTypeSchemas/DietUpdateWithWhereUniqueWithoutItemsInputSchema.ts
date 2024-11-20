import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietWhereUniqueInputSchema } from './DietWhereUniqueInputSchema';
import { DietUpdateWithoutItemsInputSchema } from './DietUpdateWithoutItemsInputSchema';
import { DietUncheckedUpdateWithoutItemsInputSchema } from './DietUncheckedUpdateWithoutItemsInputSchema';

export const DietUpdateWithWhereUniqueWithoutItemsInputSchema: z.ZodType<Prisma.DietUpdateWithWhereUniqueWithoutItemsInput> = z.object({
  where: z.lazy(() => DietWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DietUpdateWithoutItemsInputSchema),z.lazy(() => DietUncheckedUpdateWithoutItemsInputSchema) ]),
}).strict();

export default DietUpdateWithWhereUniqueWithoutItemsInputSchema;
