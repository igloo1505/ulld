import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/SnippetCreateInputSchema.js
..//inputTypeSchemas/SnippetUncheckedCreateInputSchema.js
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const SnippetSelectSchema: z.ZodType<Prisma.SnippetSelect> = z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional(),
  description: z.boolean().optional(),
  keywords: z.boolean().optional(),
  language: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()
export const SnippetCreateArgsSchema: z.ZodType<Prisma.SnippetCreateArgs> = z.object({
  select: SnippetSelectSchema.optional(),
  data: z.union([ SnippetCreateInputSchema,SnippetUncheckedCreateInputSchema ]),
}).strict() ;
export default SnippetCreateArgsSchema;