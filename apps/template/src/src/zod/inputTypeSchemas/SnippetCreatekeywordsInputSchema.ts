import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SnippetCreatekeywordsInputSchema: z.ZodType<Prisma.SnippetCreatekeywordsInput> = z.object({
  set: z.string().array()
}).strict();

export default SnippetCreatekeywordsInputSchema;
