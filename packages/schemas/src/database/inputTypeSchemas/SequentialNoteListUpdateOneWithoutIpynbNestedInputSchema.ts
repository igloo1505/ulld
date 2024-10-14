import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SequentialNoteListCreateWithoutIpynbInputSchema } from './SequentialNoteListCreateWithoutIpynbInputSchema';
import { SequentialNoteListUncheckedCreateWithoutIpynbInputSchema } from './SequentialNoteListUncheckedCreateWithoutIpynbInputSchema';
import { SequentialNoteListCreateOrConnectWithoutIpynbInputSchema } from './SequentialNoteListCreateOrConnectWithoutIpynbInputSchema';
import { SequentialNoteListUpsertWithoutIpynbInputSchema } from './SequentialNoteListUpsertWithoutIpynbInputSchema';
import { SequentialNoteListWhereInputSchema } from './SequentialNoteListWhereInputSchema';
import { SequentialNoteListWhereUniqueInputSchema } from './SequentialNoteListWhereUniqueInputSchema';
import { SequentialNoteListUpdateToOneWithWhereWithoutIpynbInputSchema } from './SequentialNoteListUpdateToOneWithWhereWithoutIpynbInputSchema';
import { SequentialNoteListUpdateWithoutIpynbInputSchema } from './SequentialNoteListUpdateWithoutIpynbInputSchema';
import { SequentialNoteListUncheckedUpdateWithoutIpynbInputSchema } from './SequentialNoteListUncheckedUpdateWithoutIpynbInputSchema';

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
