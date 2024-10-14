import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicCreateWithoutBibEntriesInputSchema } from './TopicCreateWithoutBibEntriesInputSchema';
import { TopicUncheckedCreateWithoutBibEntriesInputSchema } from './TopicUncheckedCreateWithoutBibEntriesInputSchema';
import { TopicCreateOrConnectWithoutBibEntriesInputSchema } from './TopicCreateOrConnectWithoutBibEntriesInputSchema';
import { TopicUpsertWithWhereUniqueWithoutBibEntriesInputSchema } from './TopicUpsertWithWhereUniqueWithoutBibEntriesInputSchema';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicUpdateWithWhereUniqueWithoutBibEntriesInputSchema } from './TopicUpdateWithWhereUniqueWithoutBibEntriesInputSchema';
import { TopicUpdateManyWithWhereWithoutBibEntriesInputSchema } from './TopicUpdateManyWithWhereWithoutBibEntriesInputSchema';
import { TopicScalarWhereInputSchema } from './TopicScalarWhereInputSchema';

export const TopicUncheckedUpdateManyWithoutBibEntriesNestedInputSchema: z.ZodType<Prisma.TopicUncheckedUpdateManyWithoutBibEntriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => TopicCreateWithoutBibEntriesInputSchema),z.lazy(() => TopicCreateWithoutBibEntriesInputSchema).array(),z.lazy(() => TopicUncheckedCreateWithoutBibEntriesInputSchema),z.lazy(() => TopicUncheckedCreateWithoutBibEntriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TopicCreateOrConnectWithoutBibEntriesInputSchema),z.lazy(() => TopicCreateOrConnectWithoutBibEntriesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TopicUpsertWithWhereUniqueWithoutBibEntriesInputSchema),z.lazy(() => TopicUpsertWithWhereUniqueWithoutBibEntriesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TopicUpdateWithWhereUniqueWithoutBibEntriesInputSchema),z.lazy(() => TopicUpdateWithWhereUniqueWithoutBibEntriesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TopicUpdateManyWithWhereWithoutBibEntriesInputSchema),z.lazy(() => TopicUpdateManyWithWhereWithoutBibEntriesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TopicScalarWhereInputSchema),z.lazy(() => TopicScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TopicUncheckedUpdateManyWithoutBibEntriesNestedInputSchema;
