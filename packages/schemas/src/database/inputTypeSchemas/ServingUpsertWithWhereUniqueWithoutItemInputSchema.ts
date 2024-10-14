import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServingWhereUniqueInputSchema } from './ServingWhereUniqueInputSchema';
import { ServingUpdateWithoutItemInputSchema } from './ServingUpdateWithoutItemInputSchema';
import { ServingUncheckedUpdateWithoutItemInputSchema } from './ServingUncheckedUpdateWithoutItemInputSchema';
import { ServingCreateWithoutItemInputSchema } from './ServingCreateWithoutItemInputSchema';
import { ServingUncheckedCreateWithoutItemInputSchema } from './ServingUncheckedCreateWithoutItemInputSchema';

export const ServingUpsertWithWhereUniqueWithoutItemInputSchema: z.ZodType<Prisma.ServingUpsertWithWhereUniqueWithoutItemInput> = z.object({
  where: z.lazy(() => ServingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ServingUpdateWithoutItemInputSchema),z.lazy(() => ServingUncheckedUpdateWithoutItemInputSchema) ]),
  create: z.union([ z.lazy(() => ServingCreateWithoutItemInputSchema),z.lazy(() => ServingUncheckedCreateWithoutItemInputSchema) ]),
}).strict();

export default ServingUpsertWithWhereUniqueWithoutItemInputSchema;
