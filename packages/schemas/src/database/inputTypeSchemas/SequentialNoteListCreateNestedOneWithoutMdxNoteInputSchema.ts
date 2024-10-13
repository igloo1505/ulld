import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SequentialNoteListCreateWithoutMdxNoteInputSchema } from '../SequentialNoteListCreateWithoutMdxNoteInputSchema.js';
import { SequentialNoteListUncheckedCreateWithoutMdxNoteInputSchema } from '../SequentialNoteListUncheckedCreateWithoutMdxNoteInputSchema.js';
import { SequentialNoteListCreateOrConnectWithoutMdxNoteInputSchema } from '../SequentialNoteListCreateOrConnectWithoutMdxNoteInputSchema.js';
import { SequentialNoteListWhereUniqueInputSchema } from '../SequentialNoteListWhereUniqueInputSchema.js';
export const SequentialNoteListCreateNestedOneWithoutMdxNoteInputSchema: z.ZodType<Prisma.SequentialNoteListCreateNestedOneWithoutMdxNoteInput> = z.object({
  create: z.union([ z.lazy(() => SequentialNoteListCreateWithoutMdxNoteInputSchema),z.lazy(() => SequentialNoteListUncheckedCreateWithoutMdxNoteInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SequentialNoteListCreateOrConnectWithoutMdxNoteInputSchema).optional(),
  connect: z.lazy(() => SequentialNoteListWhereUniqueInputSchema).optional()
}).strict();
export default SequentialNoteListCreateNestedOneWithoutMdxNoteInputSchema;