import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanbanCreateWithoutTagsInputSchema } from './KanbanCreateWithoutTagsInputSchema';
import { KanbanUncheckedCreateWithoutTagsInputSchema } from './KanbanUncheckedCreateWithoutTagsInputSchema';
import { KanbanCreateOrConnectWithoutTagsInputSchema } from './KanbanCreateOrConnectWithoutTagsInputSchema';
import { KanbanWhereUniqueInputSchema } from './KanbanWhereUniqueInputSchema';

export const KanbanCreateNestedOneWithoutTagsInputSchema: z.ZodType<Prisma.KanbanCreateNestedOneWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => KanbanCreateWithoutTagsInputSchema),z.lazy(() => KanbanUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => KanbanCreateOrConnectWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => KanbanWhereUniqueInputSchema).optional()
}).strict();

export default KanbanCreateNestedOneWithoutTagsInputSchema;
