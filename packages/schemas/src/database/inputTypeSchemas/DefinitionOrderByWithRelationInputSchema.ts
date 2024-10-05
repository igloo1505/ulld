import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { MdxNoteOrderByWithRelationInputSchema } from './MdxNoteOrderByWithRelationInputSchema';
import { DefinitionOrderByRelevanceInputSchema } from './DefinitionOrderByRelevanceInputSchema';

export const DefinitionOrderByWithRelationInputSchema: z.ZodType<Prisma.DefinitionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  content: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  alphabeticalLabel: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  mdxNoteId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional(),
  mdxNote: z.lazy(() => MdxNoteOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => DefinitionOrderByRelevanceInputSchema).optional()
}).strict();

export default DefinitionOrderByWithRelationInputSchema;
