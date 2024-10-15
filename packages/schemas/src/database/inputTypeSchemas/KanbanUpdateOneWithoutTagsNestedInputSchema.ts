import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanbanCreateWithoutTagsInputSchema } from './KanbanCreateWithoutTagsInputSchema.js';
import { KanbanUncheckedCreateWithoutTagsInputSchema } from './KanbanUncheckedCreateWithoutTagsInputSchema.js';
import { KanbanCreateOrConnectWithoutTagsInputSchema } from './KanbanCreateOrConnectWithoutTagsInputSchema.js';
import { KanbanUpsertWithoutTagsInputSchema } from './KanbanUpsertWithoutTagsInputSchema.js';
import { KanbanWhereInputSchema } from './KanbanWhereInputSchema.js';
import { KanbanWhereUniqueInputSchema } from './KanbanWhereUniqueInputSchema.js';
import { KanbanUpdateToOneWithWhereWithoutTagsInputSchema } from './KanbanUpdateToOneWithWhereWithoutTagsInputSchema.js';
import { KanbanUpdateWithoutTagsInputSchema } from './KanbanUpdateWithoutTagsInputSchema.js';
import { KanbanUncheckedUpdateWithoutTagsInputSchema } from './KanbanUncheckedUpdateWithoutTagsInputSchema.js';
export const KanbanUpdateOneWithoutTagsNestedInputSchema: z.ZodType<Prisma.KanbanUpdateOneWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => KanbanCreateWithoutTagsInputSchema),z.lazy(() => KanbanUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => KanbanCreateOrConnectWithoutTagsInputSchema).optional(),
  upsert: z.lazy(() => KanbanUpsertWithoutTagsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => KanbanWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => KanbanWhereInputSchema) ]).optional(),
  connect: z.lazy(() => KanbanWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => KanbanUpdateToOneWithWhereWithoutTagsInputSchema),z.lazy(() => KanbanUpdateWithoutTagsInputSchema),z.lazy(() => KanbanUncheckedUpdateWithoutTagsInputSchema) ]).optional(),
}).strict();
export default KanbanUpdateOneWithoutTagsNestedInputSchema;