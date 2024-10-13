import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ServingCreateWithoutItemInputSchema } from '../ServingCreateWithoutItemInputSchema.js';
import { ServingUncheckedCreateWithoutItemInputSchema } from '../ServingUncheckedCreateWithoutItemInputSchema.js';
import { ServingCreateOrConnectWithoutItemInputSchema } from '../ServingCreateOrConnectWithoutItemInputSchema.js';
import { ServingUpsertWithWhereUniqueWithoutItemInputSchema } from '../ServingUpsertWithWhereUniqueWithoutItemInputSchema.js';
import { ServingCreateManyItemInputEnvelopeSchema } from '../ServingCreateManyItemInputEnvelopeSchema.js';
import { ServingWhereUniqueInputSchema } from '../ServingWhereUniqueInputSchema.js';
import { ServingUpdateWithWhereUniqueWithoutItemInputSchema } from '../ServingUpdateWithWhereUniqueWithoutItemInputSchema.js';
import { ServingUpdateManyWithWhereWithoutItemInputSchema } from '../ServingUpdateManyWithWhereWithoutItemInputSchema.js';
import { ServingScalarWhereInputSchema } from '../ServingScalarWhereInputSchema.js';
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