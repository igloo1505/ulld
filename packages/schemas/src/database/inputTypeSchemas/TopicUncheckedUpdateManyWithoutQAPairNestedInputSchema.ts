import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicCreateWithoutQAPairInputSchema } from './TopicCreateWithoutQAPairInputSchema';
import { TopicUncheckedCreateWithoutQAPairInputSchema } from './TopicUncheckedCreateWithoutQAPairInputSchema';
import { TopicCreateOrConnectWithoutQAPairInputSchema } from './TopicCreateOrConnectWithoutQAPairInputSchema';
import { TopicUpsertWithWhereUniqueWithoutQAPairInputSchema } from './TopicUpsertWithWhereUniqueWithoutQAPairInputSchema';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicUpdateWithWhereUniqueWithoutQAPairInputSchema } from './TopicUpdateWithWhereUniqueWithoutQAPairInputSchema';
import { TopicUpdateManyWithWhereWithoutQAPairInputSchema } from './TopicUpdateManyWithWhereWithoutQAPairInputSchema';
import { TopicScalarWhereInputSchema } from './TopicScalarWhereInputSchema';

export const TopicUncheckedUpdateManyWithoutQAPairNestedInputSchema: z.ZodType<Prisma.TopicUncheckedUpdateManyWithoutQAPairNestedInput> = z.object({
  create: z.union([ z.lazy(() => TopicCreateWithoutQAPairInputSchema),z.lazy(() => TopicCreateWithoutQAPairInputSchema).array(),z.lazy(() => TopicUncheckedCreateWithoutQAPairInputSchema),z.lazy(() => TopicUncheckedCreateWithoutQAPairInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TopicCreateOrConnectWithoutQAPairInputSchema),z.lazy(() => TopicCreateOrConnectWithoutQAPairInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TopicUpsertWithWhereUniqueWithoutQAPairInputSchema),z.lazy(() => TopicUpsertWithWhereUniqueWithoutQAPairInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TopicUpdateWithWhereUniqueWithoutQAPairInputSchema),z.lazy(() => TopicUpdateWithWhereUniqueWithoutQAPairInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TopicUpdateManyWithWhereWithoutQAPairInputSchema),z.lazy(() => TopicUpdateManyWithWhereWithoutQAPairInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TopicScalarWhereInputSchema),z.lazy(() => TopicScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TopicUncheckedUpdateManyWithoutQAPairNestedInputSchema;
