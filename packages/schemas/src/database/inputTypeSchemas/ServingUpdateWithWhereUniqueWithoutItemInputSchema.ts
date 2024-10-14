import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServingWhereUniqueInputSchema } from './ServingWhereUniqueInputSchema';
import { ServingUpdateWithoutItemInputSchema } from './ServingUpdateWithoutItemInputSchema';
import { ServingUncheckedUpdateWithoutItemInputSchema } from './ServingUncheckedUpdateWithoutItemInputSchema';

export const ServingUpdateWithWhereUniqueWithoutItemInputSchema: z.ZodType<Prisma.ServingUpdateWithWhereUniqueWithoutItemInput> = z.object({
  where: z.lazy(() => ServingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ServingUpdateWithoutItemInputSchema),z.lazy(() => ServingUncheckedUpdateWithoutItemInputSchema) ]),
}).strict();

export default ServingUpdateWithWhereUniqueWithoutItemInputSchema;
