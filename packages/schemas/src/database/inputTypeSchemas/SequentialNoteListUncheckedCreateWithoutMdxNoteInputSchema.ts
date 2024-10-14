import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbUncheckedCreateNestedManyWithoutSequentialListInputSchema } from './IpynbUncheckedCreateNestedManyWithoutSequentialListInputSchema';

export const SequentialNoteListUncheckedCreateWithoutMdxNoteInputSchema: z.ZodType<Prisma.SequentialNoteListUncheckedCreateWithoutMdxNoteInput> = z.object({
  sequentialKey: z.string(),
  Ipynb: z.lazy(() => IpynbUncheckedCreateNestedManyWithoutSequentialListInputSchema).optional()
}).strict();

export default SequentialNoteListUncheckedCreateWithoutMdxNoteInputSchema;
