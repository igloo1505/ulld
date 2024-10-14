import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicCreateWithoutMdxNotesInputSchema } from './TopicCreateWithoutMdxNotesInputSchema';
import { TopicUncheckedCreateWithoutMdxNotesInputSchema } from './TopicUncheckedCreateWithoutMdxNotesInputSchema';
import { TopicCreateOrConnectWithoutMdxNotesInputSchema } from './TopicCreateOrConnectWithoutMdxNotesInputSchema';
import { TopicUpsertWithWhereUniqueWithoutMdxNotesInputSchema } from './TopicUpsertWithWhereUniqueWithoutMdxNotesInputSchema';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicUpdateWithWhereUniqueWithoutMdxNotesInputSchema } from './TopicUpdateWithWhereUniqueWithoutMdxNotesInputSchema';
import { TopicUpdateManyWithWhereWithoutMdxNotesInputSchema } from './TopicUpdateManyWithWhereWithoutMdxNotesInputSchema';
import { TopicScalarWhereInputSchema } from './TopicScalarWhereInputSchema';

export const TopicUpdateManyWithoutMdxNotesNestedInputSchema: z.ZodType<Prisma.TopicUpdateManyWithoutMdxNotesNestedInput> = z.object({
  create: z.union([ z.lazy(() => TopicCreateWithoutMdxNotesInputSchema),z.lazy(() => TopicCreateWithoutMdxNotesInputSchema).array(),z.lazy(() => TopicUncheckedCreateWithoutMdxNotesInputSchema),z.lazy(() => TopicUncheckedCreateWithoutMdxNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TopicCreateOrConnectWithoutMdxNotesInputSchema),z.lazy(() => TopicCreateOrConnectWithoutMdxNotesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TopicUpsertWithWhereUniqueWithoutMdxNotesInputSchema),z.lazy(() => TopicUpsertWithWhereUniqueWithoutMdxNotesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TopicUpdateWithWhereUniqueWithoutMdxNotesInputSchema),z.lazy(() => TopicUpdateWithWhereUniqueWithoutMdxNotesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TopicUpdateManyWithWhereWithoutMdxNotesInputSchema),z.lazy(() => TopicUpdateManyWithWhereWithoutMdxNotesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TopicScalarWhereInputSchema),z.lazy(() => TopicScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TopicUpdateManyWithoutMdxNotesNestedInputSchema;
