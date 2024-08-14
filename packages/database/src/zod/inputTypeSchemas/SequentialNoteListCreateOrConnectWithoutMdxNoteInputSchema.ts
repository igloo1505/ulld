import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SequentialNoteListWhereUniqueInputSchema } from './SequentialNoteListWhereUniqueInputSchema';
import { SequentialNoteListCreateWithoutMdxNoteInputSchema } from './SequentialNoteListCreateWithoutMdxNoteInputSchema';
import { SequentialNoteListUncheckedCreateWithoutMdxNoteInputSchema } from './SequentialNoteListUncheckedCreateWithoutMdxNoteInputSchema';

export const SequentialNoteListCreateOrConnectWithoutMdxNoteInputSchema: z.ZodType<Prisma.SequentialNoteListCreateOrConnectWithoutMdxNoteInput> = z.object({
  where: z.lazy(() => SequentialNoteListWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SequentialNoteListCreateWithoutMdxNoteInputSchema),z.lazy(() => SequentialNoteListUncheckedCreateWithoutMdxNoteInputSchema) ]),
}).strict();

export default SequentialNoteListCreateOrConnectWithoutMdxNoteInputSchema;
