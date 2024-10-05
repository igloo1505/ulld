import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const NoteTypeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.NoteTypeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => NoteTypeScalarWhereWithAggregatesInputSchema),z.lazy(() => NoteTypeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => NoteTypeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NoteTypeScalarWhereWithAggregatesInputSchema),z.lazy(() => NoteTypeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default NoteTypeScalarWhereWithAggregatesInputSchema;
