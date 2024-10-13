import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicCreateWithoutKanbanInputSchema } from '../TopicCreateWithoutKanbanInputSchema.js';
import { TopicUncheckedCreateWithoutKanbanInputSchema } from '../TopicUncheckedCreateWithoutKanbanInputSchema.js';
import { TopicCreateOrConnectWithoutKanbanInputSchema } from '../TopicCreateOrConnectWithoutKanbanInputSchema.js';
import { TopicCreateManyKanbanInputEnvelopeSchema } from '../TopicCreateManyKanbanInputEnvelopeSchema.js';
import { TopicWhereUniqueInputSchema } from '../TopicWhereUniqueInputSchema.js';
export const TopicUncheckedCreateNestedManyWithoutKanbanInputSchema: z.ZodType<Prisma.TopicUncheckedCreateNestedManyWithoutKanbanInput> = z.object({
  create: z.union([ z.lazy(() => TopicCreateWithoutKanbanInputSchema),z.lazy(() => TopicCreateWithoutKanbanInputSchema).array(),z.lazy(() => TopicUncheckedCreateWithoutKanbanInputSchema),z.lazy(() => TopicUncheckedCreateWithoutKanbanInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TopicCreateOrConnectWithoutKanbanInputSchema),z.lazy(() => TopicCreateOrConnectWithoutKanbanInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TopicCreateManyKanbanInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default TopicUncheckedCreateNestedManyWithoutKanbanInputSchema;