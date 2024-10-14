import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NoteTypeWhereInputSchema } from './NoteTypeWhereInputSchema';

export const NoteTypeWhereUniqueInputSchema: z.ZodType<Prisma.NoteTypeWhereUniqueInput> = z.object({
  name: z.string()
})
.and(z.object({
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => NoteTypeWhereInputSchema),z.lazy(() => NoteTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NoteTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NoteTypeWhereInputSchema),z.lazy(() => NoteTypeWhereInputSchema).array() ]).optional(),
}).strict());

export default NoteTypeWhereUniqueInputSchema;
