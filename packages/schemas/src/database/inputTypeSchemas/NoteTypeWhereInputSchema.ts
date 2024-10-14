import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';

export const NoteTypeWhereInputSchema: z.ZodType<Prisma.NoteTypeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => NoteTypeWhereInputSchema),z.lazy(() => NoteTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NoteTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NoteTypeWhereInputSchema),z.lazy(() => NoteTypeWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default NoteTypeWhereInputSchema;
