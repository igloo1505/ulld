import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SnippetWhereInputSchema } from '../inputTypeSchemas/SnippetWhereInputSchema'
import { SnippetOrderByWithRelationInputSchema } from '../inputTypeSchemas/SnippetOrderByWithRelationInputSchema'
import { SnippetWhereUniqueInputSchema } from '../inputTypeSchemas/SnippetWhereUniqueInputSchema'
import { SnippetScalarFieldEnumSchema } from '../inputTypeSchemas/SnippetScalarFieldEnumSchema'
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

export const SnippetFindManyArgsSchema: z.ZodType<Prisma.SnippetFindManyArgs> = z.object({
  select: SnippetSelectSchema.optional(),
  where: SnippetWhereInputSchema.optional(),
  orderBy: z.union([ SnippetOrderByWithRelationInputSchema.array(),SnippetOrderByWithRelationInputSchema ]).optional(),
  cursor: SnippetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SnippetScalarFieldEnumSchema,SnippetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default SnippetFindManyArgsSchema;
