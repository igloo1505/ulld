import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SequentialNoteListCreateWithoutMdxNoteInputSchema } from '../SequentialNoteListCreateWithoutMdxNoteInputSchema.js';
import { SequentialNoteListUncheckedCreateWithoutMdxNoteInputSchema } from '../SequentialNoteListUncheckedCreateWithoutMdxNoteInputSchema.js';
import { SequentialNoteListCreateOrConnectWithoutMdxNoteInputSchema } from '../SequentialNoteListCreateOrConnectWithoutMdxNoteInputSchema.js';
import { SequentialNoteListUpsertWithoutMdxNoteInputSchema } from '../SequentialNoteListUpsertWithoutMdxNoteInputSchema.js';
import { SequentialNoteListWhereInputSchema } from '../SequentialNoteListWhereInputSchema.js';
import { SequentialNoteListWhereUniqueInputSchema } from '../SequentialNoteListWhereUniqueInputSchema.js';
import { SequentialNoteListUpdateToOneWithWhereWithoutMdxNoteInputSchema } from '../SequentialNoteListUpdateToOneWithWhereWithoutMdxNoteInputSchema.js';
import { SequentialNoteListUpdateWithoutMdxNoteInputSchema } from '../SequentialNoteListUpdateWithoutMdxNoteInputSchema.js';
import { SequentialNoteListUncheckedUpdateWithoutMdxNoteInputSchema } from '../SequentialNoteListUncheckedUpdateWithoutMdxNoteInputSchema.js';
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