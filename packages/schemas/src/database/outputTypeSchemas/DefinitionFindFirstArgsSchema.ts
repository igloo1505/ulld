import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { DefinitionIncludeSchema } from '../inputTypeSchemas/DefinitionIncludeSchema.js'
import { DefinitionWhereInputSchema } from '../inputTypeSchemas/DefinitionWhereInputSchema.js'
import { DefinitionOrderByWithRelationInputSchema } from '../inputTypeSchemas/DefinitionOrderByWithRelationInputSchema.js'
import { DefinitionWhereUniqueInputSchema } from '../inputTypeSchemas/DefinitionWhereUniqueInputSchema.js'
import { DefinitionScalarFieldEnumSchema } from '../inputTypeSchemas/DefinitionScalarFieldEnumSchema.js'
import { MdxNoteArgsSchema } from "../outputTypeSchemas/MdxNoteArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const DefinitionSelectSchema: z.ZodType<Prisma.DefinitionSelect> = z.object({
  id: z.boolean().optional(),
  label: z.boolean().optional(),
  content: z.boolean().optional(),
  alphabeticalLabel: z.boolean().optional(),
  mdxNoteId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  lastAccess: z.boolean().optional(),
  mdxNote: z.union([z.boolean(),z.lazy(() => MdxNoteArgsSchema)]).optional(),
}).strict()
export const DefinitionFindFirstArgsSchema: z.ZodType<Prisma.DefinitionFindFirstArgs> = z.object({
  select: DefinitionSelectSchema.optional(),
  include: DefinitionIncludeSchema.optional(),
  where: DefinitionWhereInputSchema.optional(),
  orderBy: z.union([ DefinitionOrderByWithRelationInputSchema.array(),DefinitionOrderByWithRelationInputSchema ]).optional(),
  cursor: DefinitionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DefinitionScalarFieldEnumSchema,DefinitionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;
export default DefinitionFindFirstArgsSchema;