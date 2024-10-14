import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SequentialNoteListCreateWithoutIpynbInputSchema } from './SequentialNoteListCreateWithoutIpynbInputSchema.js';
import { SequentialNoteListUncheckedCreateWithoutIpynbInputSchema } from './SequentialNoteListUncheckedCreateWithoutIpynbInputSchema.js';
import { SequentialNoteListCreateOrConnectWithoutIpynbInputSchema } from './SequentialNoteListCreateOrConnectWithoutIpynbInputSchema.js';
import { SequentialNoteListUpsertWithoutIpynbInputSchema } from './SequentialNoteListUpsertWithoutIpynbInputSchema.js';
import { SequentialNoteListWhereInputSchema } from './SequentialNoteListWhereInputSchema.js';
import { SequentialNoteListWhereUniqueInputSchema } from './SequentialNoteListWhereUniqueInputSchema.js';
import { SequentialNoteListUpdateToOneWithWhereWithoutIpynbInputSchema } from './SequentialNoteListUpdateToOneWithWhereWithoutIpynbInputSchema.js';
import { SequentialNoteListUpdateWithoutIpynbInputSchema } from './SequentialNoteListUpdateWithoutIpynbInputSchema.js';
import { SequentialNoteListUncheckedUpdateWithoutIpynbInputSchema } from './SequentialNoteListUncheckedUpdateWithoutIpynbInputSchema.js';
export const SequentialNoteListUpdateOneWithoutIpynbNestedInputSchema: z.ZodType<Prisma.SequentialNoteListUpdateOneWithoutIpynbNestedInput> = z.object({
  create: z.union([ z.lazy(() => SequentialNoteListCreateWithoutIpynbInputSchema),z.lazy(() => SequentialNoteListUncheckedCreateWithoutIpynbInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SequentialNoteListCreateOrConnectWithoutIpynbInputSchema).optional(),
  upsert: z.lazy(() => SequentialNoteListUpsertWithoutIpynbInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => SequentialNoteListWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => SequentialNoteListWhereInputSchema) ]).optional(),
  connect: z.lazy(() => SequentialNoteListWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SequentialNoteListUpdateToOneWithWhereWithoutIpynbInputSchema),z.lazy(() => SequentialNoteListUpdateWithoutIpynbInputSchema),z.lazy(() => SequentialNoteListUncheckedUpdateWithoutIpynbInputSchema) ]).optional(),
}).strict();
export default SequentialNoteListUpdateOneWithoutIpynbNestedInputSchema;