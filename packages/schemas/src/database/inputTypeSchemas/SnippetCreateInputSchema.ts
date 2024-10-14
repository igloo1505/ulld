import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SnippetCreatekeywordsInputSchema } from './SnippetCreatekeywordsInputSchema';

export const SnippetCreateInputSchema: z.ZodType<Prisma.SnippetCreateInput> = z.object({
  content: z.string(),
  description: z.string(),
  keywords: z.union([ z.lazy(() => SnippetCreatekeywordsInputSchema),z.string().array() ]).optional(),
  language: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export default SnippetCreateInputSchema;
