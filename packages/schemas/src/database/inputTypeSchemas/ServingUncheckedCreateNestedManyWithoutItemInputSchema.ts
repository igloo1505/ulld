import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ServingCreateWithoutItemInputSchema } from '../ServingCreateWithoutItemInputSchema.js';
import { ServingUncheckedCreateWithoutItemInputSchema } from '../ServingUncheckedCreateWithoutItemInputSchema.js';
import { ServingCreateOrConnectWithoutItemInputSchema } from '../ServingCreateOrConnectWithoutItemInputSchema.js';
import { ServingCreateManyItemInputEnvelopeSchema } from '../ServingCreateManyItemInputEnvelopeSchema.js';
import { ServingWhereUniqueInputSchema } from '../ServingWhereUniqueInputSchema.js';
export const ServingUncheckedCreateNestedManyWithoutItemInputSchema: z.ZodType<Prisma.ServingUncheckedCreateNestedManyWithoutItemInput> = z.object({
  create: z.union([ z.lazy(() => ServingCreateWithoutItemInputSchema),z.lazy(() => ServingCreateWithoutItemInputSchema).array(),z.lazy(() => ServingUncheckedCreateWithoutItemInputSchema),z.lazy(() => ServingUncheckedCreateWithoutItemInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ServingCreateOrConnectWithoutItemInputSchema),z.lazy(() => ServingCreateOrConnectWithoutItemInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ServingCreateManyItemInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ServingWhereUniqueInputSchema),z.lazy(() => ServingWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default ServingUncheckedCreateNestedManyWithoutItemInputSchema;