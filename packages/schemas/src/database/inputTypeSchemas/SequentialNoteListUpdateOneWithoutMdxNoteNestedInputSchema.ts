import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SequentialNoteListCreateWithoutMdxNoteInputSchema } from './SequentialNoteListCreateWithoutMdxNoteInputSchema';
import { SequentialNoteListUncheckedCreateWithoutMdxNoteInputSchema } from './SequentialNoteListUncheckedCreateWithoutMdxNoteInputSchema';
import { SequentialNoteListCreateOrConnectWithoutMdxNoteInputSchema } from './SequentialNoteListCreateOrConnectWithoutMdxNoteInputSchema';
import { SequentialNoteListUpsertWithoutMdxNoteInputSchema } from './SequentialNoteListUpsertWithoutMdxNoteInputSchema';
import { SequentialNoteListWhereInputSchema } from './SequentialNoteListWhereInputSchema';
import { SequentialNoteListWhereUniqueInputSchema } from './SequentialNoteListWhereUniqueInputSchema';
import { SequentialNoteListUpdateToOneWithWhereWithoutMdxNoteInputSchema } from './SequentialNoteListUpdateToOneWithWhereWithoutMdxNoteInputSchema';
import { SequentialNoteListUpdateWithoutMdxNoteInputSchema } from './SequentialNoteListUpdateWithoutMdxNoteInputSchema';
import { SequentialNoteListUncheckedUpdateWithoutMdxNoteInputSchema } from './SequentialNoteListUncheckedUpdateWithoutMdxNoteInputSchema';

export const SequentialNoteListUpdateOneWithoutMdxNoteNestedInputSchema: z.ZodType<Prisma.SequentialNoteListUpdateOneWithoutMdxNoteNestedInput> = z.object({
  create: z.union([ z.lazy(() => SequentialNoteListCreateWithoutMdxNoteInputSchema),z.lazy(() => SequentialNoteListUncheckedCreateWithoutMdxNoteInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SequentialNoteListCreateOrConnectWithoutMdxNoteInputSchema).optional(),
  upsert: z.lazy(() => SequentialNoteListUpsertWithoutMdxNoteInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => SequentialNoteListWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => SequentialNoteListWhereInputSchema) ]).optional(),
  connect: z.lazy(() => SequentialNoteListWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SequentialNoteListUpdateToOneWithWhereWithoutMdxNoteInputSchema),z.lazy(() => SequentialNoteListUpdateWithoutMdxNoteInputSchema),z.lazy(() => SequentialNoteListUncheckedUpdateWithoutMdxNoteInputSchema) ]).optional(),
}).strict();

export default SequentialNoteListUpdateOneWithoutMdxNoteNestedInputSchema;
