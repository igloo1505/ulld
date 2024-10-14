import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServingCreateWithoutItemInputSchema } from './ServingCreateWithoutItemInputSchema';
import { ServingUncheckedCreateWithoutItemInputSchema } from './ServingUncheckedCreateWithoutItemInputSchema';
import { ServingCreateOrConnectWithoutItemInputSchema } from './ServingCreateOrConnectWithoutItemInputSchema';
import { ServingCreateManyItemInputEnvelopeSchema } from './ServingCreateManyItemInputEnvelopeSchema';
import { ServingWhereUniqueInputSchema } from './ServingWhereUniqueInputSchema';

export const ServingCreateNestedManyWithoutItemInputSchema: z.ZodType<Prisma.ServingCreateNestedManyWithoutItemInput> = z.object({
  create: z.union([ z.lazy(() => ServingCreateWithoutItemInputSchema),z.lazy(() => ServingCreateWithoutItemInputSchema).array(),z.lazy(() => ServingUncheckedCreateWithoutItemInputSchema),z.lazy(() => ServingUncheckedCreateWithoutItemInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ServingCreateOrConnectWithoutItemInputSchema),z.lazy(() => ServingCreateOrConnectWithoutItemInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ServingCreateManyItemInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ServingWhereUniqueInputSchema),z.lazy(() => ServingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ServingCreateNestedManyWithoutItemInputSchema;
