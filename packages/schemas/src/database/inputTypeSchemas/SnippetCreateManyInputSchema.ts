import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SnippetCreatekeywordsInputSchema } from './SnippetCreatekeywordsInputSchema';

export const SnippetCreateManyInputSchema: z.ZodType<Prisma.SnippetCreateManyInput> = z.object({
  id: z.number().int().optional(),
  content: z.string(),
  description: z.string(),
  keywords: z.union([ z.lazy(() => SnippetCreatekeywordsInputSchema),z.string().array() ]).optional(),
  language: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export default SnippetCreateManyInputSchema;
