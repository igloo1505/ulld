import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SnippetCreatekeywordsInputSchema } from './SnippetCreatekeywordsInputSchema.js';
export const SnippetUncheckedCreateInputSchema: z.ZodType<Prisma.SnippetUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  content: z.string(),
  description: z.string(),
  keywords: z.union([ z.lazy(() => SnippetCreatekeywordsInputSchema),z.string().array() ]).optional(),
  language: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export default SnippetUncheckedCreateInputSchema;