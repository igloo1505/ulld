import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicCreateWithoutIpynbNotesInputSchema } from './TopicCreateWithoutIpynbNotesInputSchema';
import { TopicUncheckedCreateWithoutIpynbNotesInputSchema } from './TopicUncheckedCreateWithoutIpynbNotesInputSchema';
import { TopicCreateOrConnectWithoutIpynbNotesInputSchema } from './TopicCreateOrConnectWithoutIpynbNotesInputSchema';
import { TopicUpsertWithWhereUniqueWithoutIpynbNotesInputSchema } from './TopicUpsertWithWhereUniqueWithoutIpynbNotesInputSchema';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicUpdateWithWhereUniqueWithoutIpynbNotesInputSchema } from './TopicUpdateWithWhereUniqueWithoutIpynbNotesInputSchema';
import { TopicUpdateManyWithWhereWithoutIpynbNotesInputSchema } from './TopicUpdateManyWithWhereWithoutIpynbNotesInputSchema';
import { TopicScalarWhereInputSchema } from './TopicScalarWhereInputSchema';

export const TopicUpdateManyWithoutIpynbNotesNestedInputSchema: z.ZodType<Prisma.TopicUpdateManyWithoutIpynbNotesNestedInput> = z.object({
  create: z.union([ z.lazy(() => TopicCreateWithoutIpynbNotesInputSchema),z.lazy(() => TopicCreateWithoutIpynbNotesInputSchema).array(),z.lazy(() => TopicUncheckedCreateWithoutIpynbNotesInputSchema),z.lazy(() => TopicUncheckedCreateWithoutIpynbNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TopicCreateOrConnectWithoutIpynbNotesInputSchema),z.lazy(() => TopicCreateOrConnectWithoutIpynbNotesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TopicUpsertWithWhereUniqueWithoutIpynbNotesInputSchema),z.lazy(() => TopicUpsertWithWhereUniqueWithoutIpynbNotesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TopicUpdateWithWhereUniqueWithoutIpynbNotesInputSchema),z.lazy(() => TopicUpdateWithWhereUniqueWithoutIpynbNotesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TopicUpdateManyWithWhereWithoutIpynbNotesInputSchema),z.lazy(() => TopicUpdateManyWithWhereWithoutIpynbNotesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TopicScalarWhereInputSchema),z.lazy(() => TopicScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TopicUpdateManyWithoutIpynbNotesNestedInputSchema;
