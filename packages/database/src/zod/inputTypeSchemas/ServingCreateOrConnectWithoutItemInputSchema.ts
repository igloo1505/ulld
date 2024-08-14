import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServingWhereUniqueInputSchema } from './ServingWhereUniqueInputSchema';
import { ServingCreateWithoutItemInputSchema } from './ServingCreateWithoutItemInputSchema';
import { ServingUncheckedCreateWithoutItemInputSchema } from './ServingUncheckedCreateWithoutItemInputSchema';

export const ServingCreateOrConnectWithoutItemInputSchema: z.ZodType<Prisma.ServingCreateOrConnectWithoutItemInput> = z.object({
  where: z.lazy(() => ServingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ServingCreateWithoutItemInputSchema),z.lazy(() => ServingUncheckedCreateWithoutItemInputSchema) ]),
}).strict();

export default ServingCreateOrConnectWithoutItemInputSchema;
