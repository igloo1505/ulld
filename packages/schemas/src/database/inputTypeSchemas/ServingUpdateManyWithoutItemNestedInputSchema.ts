import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServingCreateWithoutItemInputSchema } from './ServingCreateWithoutItemInputSchema';
import { ServingUncheckedCreateWithoutItemInputSchema } from './ServingUncheckedCreateWithoutItemInputSchema';
import { ServingCreateOrConnectWithoutItemInputSchema } from './ServingCreateOrConnectWithoutItemInputSchema';
import { ServingUpsertWithWhereUniqueWithoutItemInputSchema } from './ServingUpsertWithWhereUniqueWithoutItemInputSchema';
import { ServingCreateManyItemInputEnvelopeSchema } from './ServingCreateManyItemInputEnvelopeSchema';
import { ServingWhereUniqueInputSchema } from './ServingWhereUniqueInputSchema';
import { ServingUpdateWithWhereUniqueWithoutItemInputSchema } from './ServingUpdateWithWhereUniqueWithoutItemInputSchema';
import { ServingUpdateManyWithWhereWithoutItemInputSchema } from './ServingUpdateManyWithWhereWithoutItemInputSchema';
import { ServingScalarWhereInputSchema } from './ServingScalarWhereInputSchema';

export const ServingUpdateManyWithoutItemNestedInputSchema: z.ZodType<Prisma.ServingUpdateManyWithoutItemNestedInput> = z.object({
  create: z.union([ z.lazy(() => ServingCreateWithoutItemInputSchema),z.lazy(() => ServingCreateWithoutItemInputSchema).array(),z.lazy(() => ServingUncheckedCreateWithoutItemInputSchema),z.lazy(() => ServingUncheckedCreateWithoutItemInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ServingCreateOrConnectWithoutItemInputSchema),z.lazy(() => ServingCreateOrConnectWithoutItemInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ServingUpsertWithWhereUniqueWithoutItemInputSchema),z.lazy(() => ServingUpsertWithWhereUniqueWithoutItemInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ServingCreateManyItemInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ServingWhereUniqueInputSchema),z.lazy(() => ServingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ServingWhereUniqueInputSchema),z.lazy(() => ServingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ServingWhereUniqueInputSchema),z.lazy(() => ServingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ServingWhereUniqueInputSchema),z.lazy(() => ServingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ServingUpdateWithWhereUniqueWithoutItemInputSchema),z.lazy(() => ServingUpdateWithWhereUniqueWithoutItemInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ServingUpdateManyWithWhereWithoutItemInputSchema),z.lazy(() => ServingUpdateManyWithWhereWithoutItemInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ServingScalarWhereInputSchema),z.lazy(() => ServingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ServingUpdateManyWithoutItemNestedInputSchema;
