import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SnippetWhereUniqueInputSchema } from '../inputTypeSchemas/SnippetWhereUniqueInputSchema'
import { SnippetCreateInputSchema } from '../inputTypeSchemas/SnippetCreateInputSchema'
import { SnippetUncheckedCreateInputSchema } from '../inputTypeSchemas/SnippetUncheckedCreateInputSchema'
import { SnippetUpdateInputSchema } from '../inputTypeSchemas/SnippetUpdateInputSchema'
import { SnippetUncheckedUpdateInputSchema } from '../inputTypeSchemas/SnippetUncheckedUpdateInputSchema'
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
