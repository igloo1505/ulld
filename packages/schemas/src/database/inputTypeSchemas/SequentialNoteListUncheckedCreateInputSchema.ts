import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteUncheckedCreateNestedManyWithoutSequentialListInputSchema } from './MdxNoteUncheckedCreateNestedManyWithoutSequentialListInputSchema';
import { IpynbUncheckedCreateNestedManyWithoutSequentialListInputSchema } from './IpynbUncheckedCreateNestedManyWithoutSequentialListInputSchema';

export const SequentialNoteListUncheckedCreateInputSchema: z.ZodType<Prisma.SequentialNoteListUncheckedCreateInput> = z.object({
  sequentialKey: z.string(),
  MdxNote: z.lazy(() => MdxNoteUncheckedCreateNestedManyWithoutSequentialListInputSchema).optional(),
  Ipynb: z.lazy(() => IpynbUncheckedCreateNestedManyWithoutSequentialListInputSchema).optional()
}).strict();

export default SequentialNoteListUncheckedCreateInputSchema;
