import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/SnippetWhereUniqueInputSchema.js
..//inputTypeSchemas/SnippetCreateInputSchema.js
..//inputTypeSchemas/SnippetUncheckedCreateInputSchema.js
..//inputTypeSchemas/SnippetUpdateInputSchema.js
..//inputTypeSchemas/SnippetUncheckedUpdateInputSchema.js
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
export const SnippetUpsertArgsSchema: z.ZodType<Prisma.SnippetUpsertArgs> = z.object({
  select: SnippetSelectSchema.optional(),
  where: SnippetWhereUniqueInputSchema,
  create: z.union([ SnippetCreateInputSchema,SnippetUncheckedCreateInputSchema ]),
  update: z.union([ SnippetUpdateInputSchema,SnippetUncheckedUpdateInputSchema ]),
}).strict() ;
export default SnippetUpsertArgsSchema;