import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanbanCreateWithoutListsInputSchema } from './KanbanCreateWithoutListsInputSchema';
import { KanbanUncheckedCreateWithoutListsInputSchema } from './KanbanUncheckedCreateWithoutListsInputSchema';
import { KanbanCreateOrConnectWithoutListsInputSchema } from './KanbanCreateOrConnectWithoutListsInputSchema';
import { KanbanUpsertWithoutListsInputSchema } from './KanbanUpsertWithoutListsInputSchema';
import { KanbanWhereInputSchema } from './KanbanWhereInputSchema';
import { KanbanWhereUniqueInputSchema } from './KanbanWhereUniqueInputSchema';
import { KanbanUpdateToOneWithWhereWithoutListsInputSchema } from './KanbanUpdateToOneWithWhereWithoutListsInputSchema';
import { KanbanUpdateWithoutListsInputSchema } from './KanbanUpdateWithoutListsInputSchema';
import { KanbanUncheckedUpdateWithoutListsInputSchema } from './KanbanUncheckedUpdateWithoutListsInputSchema';

export const KanbanUpdateOneWithoutListsNestedInputSchema: z.ZodType<Prisma.KanbanUpdateOneWithoutListsNestedInput> = z.object({
  create: z.union([ z.lazy(() => KanbanCreateWithoutListsInputSchema),z.lazy(() => KanbanUncheckedCreateWithoutListsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => KanbanCreateOrConnectWithoutListsInputSchema).optional(),
  upsert: z.lazy(() => KanbanUpsertWithoutListsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => KanbanWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => KanbanWhereInputSchema) ]).optional(),
  connect: z.lazy(() => KanbanWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => KanbanUpdateToOneWithWhereWithoutListsInputSchema),z.lazy(() => KanbanUpdateWithoutListsInputSchema),z.lazy(() => KanbanUncheckedUpdateWithoutListsInputSchema) ]).optional(),
}).strict();

export default KanbanUpdateOneWithoutListsNestedInputSchema;
