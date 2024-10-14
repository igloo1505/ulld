import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { NoteTypeOrderByRelevanceInputSchema } from './NoteTypeOrderByRelevanceInputSchema';

export const NoteTypeOrderByWithRelationInputSchema: z.ZodType<Prisma.NoteTypeOrderByWithRelationInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => NoteTypeOrderByRelevanceInputSchema).optional()
}).strict();

export default NoteTypeOrderByWithRelationInputSchema;
