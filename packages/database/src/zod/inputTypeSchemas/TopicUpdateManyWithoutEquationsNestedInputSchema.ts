import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicCreateWithoutEquationsInputSchema } from './TopicCreateWithoutEquationsInputSchema';
import { TopicUncheckedCreateWithoutEquationsInputSchema } from './TopicUncheckedCreateWithoutEquationsInputSchema';
import { TopicCreateOrConnectWithoutEquationsInputSchema } from './TopicCreateOrConnectWithoutEquationsInputSchema';
import { TopicUpsertWithWhereUniqueWithoutEquationsInputSchema } from './TopicUpsertWithWhereUniqueWithoutEquationsInputSchema';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicUpdateWithWhereUniqueWithoutEquationsInputSchema } from './TopicUpdateWithWhereUniqueWithoutEquationsInputSchema';
import { TopicUpdateManyWithWhereWithoutEquationsInputSchema } from './TopicUpdateManyWithWhereWithoutEquationsInputSchema';
import { TopicScalarWhereInputSchema } from './TopicScalarWhereInputSchema';

export const TopicUpdateManyWithoutEquationsNestedInputSchema: z.ZodType<Prisma.TopicUpdateManyWithoutEquationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TopicCreateWithoutEquationsInputSchema),z.lazy(() => TopicCreateWithoutEquationsInputSchema).array(),z.lazy(() => TopicUncheckedCreateWithoutEquationsInputSchema),z.lazy(() => TopicUncheckedCreateWithoutEquationsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TopicCreateOrConnectWithoutEquationsInputSchema),z.lazy(() => TopicCreateOrConnectWithoutEquationsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TopicUpsertWithWhereUniqueWithoutEquationsInputSchema),z.lazy(() => TopicUpsertWithWhereUniqueWithoutEquationsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TopicUpdateWithWhereUniqueWithoutEquationsInputSchema),z.lazy(() => TopicUpdateWithWhereUniqueWithoutEquationsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TopicUpdateManyWithWhereWithoutEquationsInputSchema),z.lazy(() => TopicUpdateManyWithWhereWithoutEquationsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TopicScalarWhereInputSchema),z.lazy(() => TopicScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TopicUpdateManyWithoutEquationsNestedInputSchema;
