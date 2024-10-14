import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicCreateWithoutKanbanInputSchema } from './TopicCreateWithoutKanbanInputSchema';
import { TopicUncheckedCreateWithoutKanbanInputSchema } from './TopicUncheckedCreateWithoutKanbanInputSchema';
import { TopicCreateOrConnectWithoutKanbanInputSchema } from './TopicCreateOrConnectWithoutKanbanInputSchema';
import { TopicUpsertWithWhereUniqueWithoutKanbanInputSchema } from './TopicUpsertWithWhereUniqueWithoutKanbanInputSchema';
import { TopicCreateManyKanbanInputEnvelopeSchema } from './TopicCreateManyKanbanInputEnvelopeSchema';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicUpdateWithWhereUniqueWithoutKanbanInputSchema } from './TopicUpdateWithWhereUniqueWithoutKanbanInputSchema';
import { TopicUpdateManyWithWhereWithoutKanbanInputSchema } from './TopicUpdateManyWithWhereWithoutKanbanInputSchema';
import { TopicScalarWhereInputSchema } from './TopicScalarWhereInputSchema';

export const TopicUpdateManyWithoutKanbanNestedInputSchema: z.ZodType<Prisma.TopicUpdateManyWithoutKanbanNestedInput> = z.object({
  create: z.union([ z.lazy(() => TopicCreateWithoutKanbanInputSchema),z.lazy(() => TopicCreateWithoutKanbanInputSchema).array(),z.lazy(() => TopicUncheckedCreateWithoutKanbanInputSchema),z.lazy(() => TopicUncheckedCreateWithoutKanbanInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TopicCreateOrConnectWithoutKanbanInputSchema),z.lazy(() => TopicCreateOrConnectWithoutKanbanInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TopicUpsertWithWhereUniqueWithoutKanbanInputSchema),z.lazy(() => TopicUpsertWithWhereUniqueWithoutKanbanInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TopicCreateManyKanbanInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TopicUpdateWithWhereUniqueWithoutKanbanInputSchema),z.lazy(() => TopicUpdateWithWhereUniqueWithoutKanbanInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TopicUpdateManyWithWhereWithoutKanbanInputSchema),z.lazy(() => TopicUpdateManyWithWhereWithoutKanbanInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TopicScalarWhereInputSchema),z.lazy(() => TopicScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TopicUpdateManyWithoutKanbanNestedInputSchema;
