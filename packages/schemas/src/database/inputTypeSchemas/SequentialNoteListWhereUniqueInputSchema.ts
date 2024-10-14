import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SequentialNoteListWhereInputSchema } from './SequentialNoteListWhereInputSchema';
import { MdxNoteListRelationFilterSchema } from './MdxNoteListRelationFilterSchema';
import { IpynbListRelationFilterSchema } from './IpynbListRelationFilterSchema';

export const SequentialNoteListWhereUniqueInputSchema: z.ZodType<Prisma.SequentialNoteListWhereUniqueInput> = z.object({
  sequentialKey: z.string()
})
.and(z.object({
  sequentialKey: z.string().optional(),
  AND: z.union([ z.lazy(() => SequentialNoteListWhereInputSchema),z.lazy(() => SequentialNoteListWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SequentialNoteListWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SequentialNoteListWhereInputSchema),z.lazy(() => SequentialNoteListWhereInputSchema).array() ]).optional(),
  MdxNote: z.lazy(() => MdxNoteListRelationFilterSchema).optional(),
  Ipynb: z.lazy(() => IpynbListRelationFilterSchema).optional()
}).strict());

export default SequentialNoteListWhereUniqueInputSchema;
