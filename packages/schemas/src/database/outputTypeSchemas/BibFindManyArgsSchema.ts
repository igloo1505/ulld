import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { BibIncludeSchema } from '../inputTypeSchemas/BibIncludeSchema.js'
import { BibWhereInputSchema } from '../inputTypeSchemas/BibWhereInputSchema.js'
import { BibOrderByWithRelationInputSchema } from '../inputTypeSchemas/BibOrderByWithRelationInputSchema.js'
import { BibWhereUniqueInputSchema } from '../inputTypeSchemas/BibWhereUniqueInputSchema.js'
import { BibScalarFieldEnumSchema } from '../inputTypeSchemas/BibScalarFieldEnumSchema.js'
import { BibEntryFindManyArgsSchema } from "../outputTypeSchemas/BibEntryFindManyArgsSchema"
import { BibCountOutputTypeArgsSchema } from "../outputTypeSchemas/BibCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const BibSelectSchema: z.ZodType<Prisma.BibSelect> = z.object({
  id: z.boolean().optional(),
  filename: z.boolean().optional(),
  firstSync: z.boolean().optional(),
  lastSync: z.boolean().optional(),
  entries: z.union([z.boolean(),z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BibCountOutputTypeArgsSchema)]).optional(),
}).strict()
export const BibFindManyArgsSchema: z.ZodType<Prisma.BibFindManyArgs> = z.object({
  select: BibSelectSchema.optional(),
  include: BibIncludeSchema.optional(),
  where: BibWhereInputSchema.optional(),
  orderBy: z.union([ BibOrderByWithRelationInputSchema.array(),BibOrderByWithRelationInputSchema ]).optional(),
  cursor: BibWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BibScalarFieldEnumSchema,BibScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;
export default BibFindManyArgsSchema;