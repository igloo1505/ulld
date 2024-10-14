import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SequentialNoteListWhereInputSchema } from './SequentialNoteListWhereInputSchema';

export const SequentialNoteListNullableRelationFilterSchema: z.ZodType<Prisma.SequentialNoteListNullableRelationFilter> = z.object({
  is: z.lazy(() => SequentialNoteListWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => SequentialNoteListWhereInputSchema).optional().nullable()
}).strict();

export default SequentialNoteListNullableRelationFilterSchema;
