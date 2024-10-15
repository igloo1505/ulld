import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { SnippetWhereInputSchema } from '../inputTypeSchemas/SnippetWhereInputSchema.js'
import { SnippetOrderByWithRelationInputSchema } from '../inputTypeSchemas/SnippetOrderByWithRelationInputSchema.js'
import { SnippetWhereUniqueInputSchema } from '../inputTypeSchemas/SnippetWhereUniqueInputSchema.js'
import { SnippetScalarFieldEnumSchema } from '../inputTypeSchemas/SnippetScalarFieldEnumSchema.js'
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
export const SnippetFindFirstArgsSchema: z.ZodType<Prisma.SnippetFindFirstArgs> = z.object({
  select: SnippetSelectSchema.optional(),
  where: SnippetWhereInputSchema.optional(),
  orderBy: z.union([ SnippetOrderByWithRelationInputSchema.array(),SnippetOrderByWithRelationInputSchema ]).optional(),
  cursor: SnippetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SnippetScalarFieldEnumSchema,SnippetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;
export default SnippetFindFirstArgsSchema;