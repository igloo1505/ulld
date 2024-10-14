import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbCreateNestedManyWithoutSequentialListInputSchema } from './IpynbCreateNestedManyWithoutSequentialListInputSchema';

export const SequentialNoteListCreateWithoutMdxNoteInputSchema: z.ZodType<Prisma.SequentialNoteListCreateWithoutMdxNoteInput> = z.object({
  sequentialKey: z.string(),
  Ipynb: z.lazy(() => IpynbCreateNestedManyWithoutSequentialListInputSchema).optional()
}).strict();

export default SequentialNoteListCreateWithoutMdxNoteInputSchema;
