import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
import { SortOrderInputSchema } from '../SortOrderInputSchema.js';
import { MdxNoteOrderByWithRelationInputSchema } from '../MdxNoteOrderByWithRelationInputSchema.js';
import { DefinitionOrderByRelevanceInputSchema } from '../DefinitionOrderByRelevanceInputSchema.js';
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