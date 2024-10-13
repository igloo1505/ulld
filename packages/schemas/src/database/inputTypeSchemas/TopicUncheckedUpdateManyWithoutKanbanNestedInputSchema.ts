import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicCreateWithoutKanbanInputSchema } from '../TopicCreateWithoutKanbanInputSchema.js';
import { TopicUncheckedCreateWithoutKanbanInputSchema } from '../TopicUncheckedCreateWithoutKanbanInputSchema.js';
import { TopicCreateOrConnectWithoutKanbanInputSchema } from '../TopicCreateOrConnectWithoutKanbanInputSchema.js';
import { TopicUpsertWithWhereUniqueWithoutKanbanInputSchema } from '../TopicUpsertWithWhereUniqueWithoutKanbanInputSchema.js';
import { TopicCreateManyKanbanInputEnvelopeSchema } from '../TopicCreateManyKanbanInputEnvelopeSchema.js';
import { TopicWhereUniqueInputSchema } from '../TopicWhereUniqueInputSchema.js';
import { TopicUpdateWithWhereUniqueWithoutKanbanInputSchema } from '../TopicUpdateWithWhereUniqueWithoutKanbanInputSchema.js';
import { TopicUpdateManyWithWhereWithoutKanbanInputSchema } from '../TopicUpdateManyWithWhereWithoutKanbanInputSchema.js';
import { TopicScalarWhereInputSchema } from '../TopicScalarWhereInputSchema.js';
export const TopicUncheckedUpdateManyWithoutKanbanNestedInputSchema: z.ZodType<Prisma.TopicUncheckedUpdateManyWithoutKanbanNestedInput> = z.object({
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
export default TopicUncheckedUpdateManyWithoutKanbanNestedInputSchema;