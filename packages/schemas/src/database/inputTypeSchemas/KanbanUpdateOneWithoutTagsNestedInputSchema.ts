import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanbanCreateWithoutTagsInputSchema } from './KanbanCreateWithoutTagsInputSchema';
import { KanbanUncheckedCreateWithoutTagsInputSchema } from './KanbanUncheckedCreateWithoutTagsInputSchema';
import { KanbanCreateOrConnectWithoutTagsInputSchema } from './KanbanCreateOrConnectWithoutTagsInputSchema';
import { KanbanUpsertWithoutTagsInputSchema } from './KanbanUpsertWithoutTagsInputSchema';
import { KanbanWhereInputSchema } from './KanbanWhereInputSchema';
import { KanbanWhereUniqueInputSchema } from './KanbanWhereUniqueInputSchema';
import { KanbanUpdateToOneWithWhereWithoutTagsInputSchema } from './KanbanUpdateToOneWithWhereWithoutTagsInputSchema';
import { KanbanUpdateWithoutTagsInputSchema } from './KanbanUpdateWithoutTagsInputSchema';
import { KanbanUncheckedUpdateWithoutTagsInputSchema } from './KanbanUncheckedUpdateWithoutTagsInputSchema';

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
