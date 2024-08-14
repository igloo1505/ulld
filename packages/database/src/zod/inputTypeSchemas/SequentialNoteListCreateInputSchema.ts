import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteCreateNestedManyWithoutSequentialListInputSchema } from './MdxNoteCreateNestedManyWithoutSequentialListInputSchema';
import { IpynbCreateNestedManyWithoutSequentialListInputSchema } from './IpynbCreateNestedManyWithoutSequentialListInputSchema';

export const SequentialNoteListCreateInputSchema: z.ZodType<Prisma.SequentialNoteListCreateInput> = z.object({
  sequentialKey: z.string(),
  MdxNote: z.lazy(() => MdxNoteCreateNestedManyWithoutSequentialListInputSchema).optional(),
  Ipynb: z.lazy(() => IpynbCreateNestedManyWithoutSequentialListInputSchema).optional()
}).strict();

export default SequentialNoteListCreateInputSchema;
