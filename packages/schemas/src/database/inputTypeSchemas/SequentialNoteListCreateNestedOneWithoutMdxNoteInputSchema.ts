import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SequentialNoteListCreateWithoutMdxNoteInputSchema } from './SequentialNoteListCreateWithoutMdxNoteInputSchema';
import { SequentialNoteListUncheckedCreateWithoutMdxNoteInputSchema } from './SequentialNoteListUncheckedCreateWithoutMdxNoteInputSchema';
import { SequentialNoteListCreateOrConnectWithoutMdxNoteInputSchema } from './SequentialNoteListCreateOrConnectWithoutMdxNoteInputSchema';
import { SequentialNoteListWhereUniqueInputSchema } from './SequentialNoteListWhereUniqueInputSchema';

export const SequentialNoteListCreateNestedOneWithoutMdxNoteInputSchema: z.ZodType<Prisma.SequentialNoteListCreateNestedOneWithoutMdxNoteInput> = z.object({
  create: z.union([ z.lazy(() => SequentialNoteListCreateWithoutMdxNoteInputSchema),z.lazy(() => SequentialNoteListUncheckedCreateWithoutMdxNoteInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SequentialNoteListCreateOrConnectWithoutMdxNoteInputSchema).optional(),
  connect: z.lazy(() => SequentialNoteListWhereUniqueInputSchema).optional()
}).strict();

export default SequentialNoteListCreateNestedOneWithoutMdxNoteInputSchema;
