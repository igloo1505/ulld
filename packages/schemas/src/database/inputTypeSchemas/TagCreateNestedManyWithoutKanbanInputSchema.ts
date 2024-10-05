import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutKanbanInputSchema } from './TagCreateWithoutKanbanInputSchema';
import { TagUncheckedCreateWithoutKanbanInputSchema } from './TagUncheckedCreateWithoutKanbanInputSchema';
import { TagCreateOrConnectWithoutKanbanInputSchema } from './TagCreateOrConnectWithoutKanbanInputSchema';
import { TagCreateManyKanbanInputEnvelopeSchema } from './TagCreateManyKanbanInputEnvelopeSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagCreateNestedManyWithoutKanbanInputSchema: z.ZodType<Prisma.TagCreateNestedManyWithoutKanbanInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutKanbanInputSchema),z.lazy(() => TagCreateWithoutKanbanInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutKanbanInputSchema),z.lazy(() => TagUncheckedCreateWithoutKanbanInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutKanbanInputSchema),z.lazy(() => TagCreateOrConnectWithoutKanbanInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagCreateManyKanbanInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TagCreateNestedManyWithoutKanbanInputSchema;
