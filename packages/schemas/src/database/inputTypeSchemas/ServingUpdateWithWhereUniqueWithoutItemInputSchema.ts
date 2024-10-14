import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ServingWhereUniqueInputSchema } from './ServingWhereUniqueInputSchema.js';
import { ServingUpdateWithoutItemInputSchema } from './ServingUpdateWithoutItemInputSchema.js';
import { ServingUncheckedUpdateWithoutItemInputSchema } from './ServingUncheckedUpdateWithoutItemInputSchema.js';
export const ServingUpdateWithWhereUniqueWithoutItemInputSchema: z.ZodType<Prisma.ServingUpdateWithWhereUniqueWithoutItemInput> = z.object({
  where: z.lazy(() => ServingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ServingUpdateWithoutItemInputSchema),z.lazy(() => ServingUncheckedUpdateWithoutItemInputSchema) ]),
}).strict();
export default ServingUpdateWithWhereUniqueWithoutItemInputSchema;