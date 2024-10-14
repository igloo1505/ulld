import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanbanWhereUniqueInputSchema } from './KanbanWhereUniqueInputSchema';
import { KanbanCreateWithoutTagsInputSchema } from './KanbanCreateWithoutTagsInputSchema';
import { KanbanUncheckedCreateWithoutTagsInputSchema } from './KanbanUncheckedCreateWithoutTagsInputSchema';

export const KanbanCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.KanbanCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => KanbanWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => KanbanCreateWithoutTagsInputSchema),z.lazy(() => KanbanUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default KanbanCreateOrConnectWithoutTagsInputSchema;
