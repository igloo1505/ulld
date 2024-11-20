import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanbanCreateWithoutTopicsInputSchema } from './KanbanCreateWithoutTopicsInputSchema';
import { KanbanUncheckedCreateWithoutTopicsInputSchema } from './KanbanUncheckedCreateWithoutTopicsInputSchema';
import { KanbanCreateOrConnectWithoutTopicsInputSchema } from './KanbanCreateOrConnectWithoutTopicsInputSchema';
import { KanbanUpsertWithoutTopicsInputSchema } from './KanbanUpsertWithoutTopicsInputSchema';
import { KanbanWhereInputSchema } from './KanbanWhereInputSchema';
import { KanbanWhereUniqueInputSchema } from './KanbanWhereUniqueInputSchema';
import { KanbanUpdateToOneWithWhereWithoutTopicsInputSchema } from './KanbanUpdateToOneWithWhereWithoutTopicsInputSchema';
import { KanbanUpdateWithoutTopicsInputSchema } from './KanbanUpdateWithoutTopicsInputSchema';
import { KanbanUncheckedUpdateWithoutTopicsInputSchema } from './KanbanUncheckedUpdateWithoutTopicsInputSchema';

export const KanbanUpdateOneWithoutTopicsNestedInputSchema: z.ZodType<Prisma.KanbanUpdateOneWithoutTopicsNestedInput> = z.object({
  create: z.union([ z.lazy(() => KanbanCreateWithoutTopicsInputSchema),z.lazy(() => KanbanUncheckedCreateWithoutTopicsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => KanbanCreateOrConnectWithoutTopicsInputSchema).optional(),
  upsert: z.lazy(() => KanbanUpsertWithoutTopicsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => KanbanWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => KanbanWhereInputSchema) ]).optional(),
  connect: z.lazy(() => KanbanWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => KanbanUpdateToOneWithWhereWithoutTopicsInputSchema),z.lazy(() => KanbanUpdateWithoutTopicsInputSchema),z.lazy(() => KanbanUncheckedUpdateWithoutTopicsInputSchema) ]).optional(),
}).strict();

export default KanbanUpdateOneWithoutTopicsNestedInputSchema;
