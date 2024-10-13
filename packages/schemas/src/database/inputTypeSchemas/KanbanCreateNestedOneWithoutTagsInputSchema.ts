import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanbanCreateWithoutTagsInputSchema } from '../KanbanCreateWithoutTagsInputSchema.js';
import { KanbanUncheckedCreateWithoutTagsInputSchema } from '../KanbanUncheckedCreateWithoutTagsInputSchema.js';
import { KanbanCreateOrConnectWithoutTagsInputSchema } from '../KanbanCreateOrConnectWithoutTagsInputSchema.js';
import { KanbanWhereUniqueInputSchema } from '../KanbanWhereUniqueInputSchema.js';
export const KanbanCreateNestedOneWithoutTagsInputSchema: z.ZodType<Prisma.KanbanCreateNestedOneWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => KanbanCreateWithoutTagsInputSchema),z.lazy(() => KanbanUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => KanbanCreateOrConnectWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => KanbanWhereUniqueInputSchema).optional()
}).strict();
export default KanbanCreateNestedOneWithoutTagsInputSchema;