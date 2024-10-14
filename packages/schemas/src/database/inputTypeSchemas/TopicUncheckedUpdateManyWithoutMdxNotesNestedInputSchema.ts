import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicCreateWithoutMdxNotesInputSchema } from './TopicCreateWithoutMdxNotesInputSchema.js';
import { TopicUncheckedCreateWithoutMdxNotesInputSchema } from './TopicUncheckedCreateWithoutMdxNotesInputSchema.js';
import { TopicCreateOrConnectWithoutMdxNotesInputSchema } from './TopicCreateOrConnectWithoutMdxNotesInputSchema.js';
import { TopicUpsertWithWhereUniqueWithoutMdxNotesInputSchema } from './TopicUpsertWithWhereUniqueWithoutMdxNotesInputSchema.js';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
import { TopicUpdateWithWhereUniqueWithoutMdxNotesInputSchema } from './TopicUpdateWithWhereUniqueWithoutMdxNotesInputSchema.js';
import { TopicUpdateManyWithWhereWithoutMdxNotesInputSchema } from './TopicUpdateManyWithWhereWithoutMdxNotesInputSchema.js';
import { TopicScalarWhereInputSchema } from './TopicScalarWhereInputSchema.js';
export const TopicUncheckedUpdateManyWithoutMdxNotesNestedInputSchema: z.ZodType<Prisma.TopicUncheckedUpdateManyWithoutMdxNotesNestedInput> = z.object({
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
export default TopicUncheckedUpdateManyWithoutMdxNotesNestedInputSchema;