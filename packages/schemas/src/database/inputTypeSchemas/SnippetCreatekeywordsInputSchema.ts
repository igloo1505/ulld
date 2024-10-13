import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const SnippetCreatekeywordsInputSchema: z.ZodType<Prisma.SnippetCreatekeywordsInput> = z.object({
  set: z.string().array()
}).strict();
export default SnippetCreatekeywordsInputSchema;