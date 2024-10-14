import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanbanCreateWithoutTopicsInputSchema } from './KanbanCreateWithoutTopicsInputSchema.js';
import { KanbanUncheckedCreateWithoutTopicsInputSchema } from './KanbanUncheckedCreateWithoutTopicsInputSchema.js';
import { KanbanCreateOrConnectWithoutTopicsInputSchema } from './KanbanCreateOrConnectWithoutTopicsInputSchema.js';
import { KanbanUpsertWithoutTopicsInputSchema } from './KanbanUpsertWithoutTopicsInputSchema.js';
import { KanbanWhereInputSchema } from './KanbanWhereInputSchema.js';
import { KanbanWhereUniqueInputSchema } from './KanbanWhereUniqueInputSchema.js';
import { KanbanUpdateToOneWithWhereWithoutTopicsInputSchema } from './KanbanUpdateToOneWithWhereWithoutTopicsInputSchema.js';
import { KanbanUpdateWithoutTopicsInputSchema } from './KanbanUpdateWithoutTopicsInputSchema.js';
import { KanbanUncheckedUpdateWithoutTopicsInputSchema } from './KanbanUncheckedUpdateWithoutTopicsInputSchema.js';
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