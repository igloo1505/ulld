import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicCreateWithoutKanbanInputSchema } from './TopicCreateWithoutKanbanInputSchema';
import { TopicUncheckedCreateWithoutKanbanInputSchema } from './TopicUncheckedCreateWithoutKanbanInputSchema';
import { TopicCreateOrConnectWithoutKanbanInputSchema } from './TopicCreateOrConnectWithoutKanbanInputSchema';
import { TopicCreateManyKanbanInputEnvelopeSchema } from './TopicCreateManyKanbanInputEnvelopeSchema';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';

export const TopicUncheckedCreateNestedManyWithoutKanbanInputSchema: z.ZodType<Prisma.TopicUncheckedCreateNestedManyWithoutKanbanInput> = z.object({
  create: z.union([ z.lazy(() => TopicCreateWithoutKanbanInputSchema),z.lazy(() => TopicCreateWithoutKanbanInputSchema).array(),z.lazy(() => TopicUncheckedCreateWithoutKanbanInputSchema),z.lazy(() => TopicUncheckedCreateWithoutKanbanInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TopicCreateOrConnectWithoutKanbanInputSchema),z.lazy(() => TopicCreateOrConnectWithoutKanbanInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TopicCreateManyKanbanInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TopicUncheckedCreateNestedManyWithoutKanbanInputSchema;
